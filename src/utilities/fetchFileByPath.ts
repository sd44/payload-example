import { promises as fs } from 'fs' // Use the promise-based API of fs
import type { File } from 'payload'
import path from 'path'

/**
 * Reads a file from the local filesystem and returns an object
 * mimicking the structure used by fetchFileByURL.
 *
 * @param filePath The absolute or relative path to the file on the server's filesystem.
 * @returns A Promise resolving to a LocalFile object.
 * @throws Throws an error if the file cannot be read (e.g., not found, permissions).
 */
export async function fetchFileByPath(filePath: string): Promise<File> {
  try {
    // 1. Get file statistics to find size and check existence/type
    const stats = await fs.stat(filePath)

    if (!stats.isFile()) {
      throw new Error(`Path is not a file: ${filePath}`)
    }

    // 2. Read the file content into a Buffer
    const data = await fs.readFile(filePath)

    // 3. Extract the filename from the path
    const name = path.basename(filePath)

    // 4. Determine the MIME type (basic implementation based on extension)
    // This is a simple guess like in your original function.
    // For robust MIME type detection, consider libraries like 'mime-types' or 'file-type'.
    const ext = path.extname(filePath).toLowerCase().slice(1) // Get extension without dot
    let mimetype = 'application/octet-stream' // Default MIME type
    // Simple check for common image types (can be expanded)
    if (['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp'].includes(ext)) {
      mimetype = `image/${ext === 'svg' ? 'svg+xml' : ext}` // Handle svg+xml correctly
    } else if (ext === 'json') {
      mimetype = 'application/json'
    } else if (ext === 'txt') {
      mimetype = 'text/plain'
    }
    // Add more types as needed...

    // 5. Get the size from stats (more reliable than data.byteLength before reading potentially huge files, though readFile reads it all anyway)
    const size = stats.size

    // 6. Return the object with the desired structure
    return {
      name, // Extracted filename
      data, // File content as a Buffer
      mimetype, // Guessed MIME type
      size, // File size in bytes
    }
  } catch (error: unknown) {
    if (!(error instanceof Error))
      throw new Error(`An unexpected error occurred while reading ${filePath}: ${String(error)}`)

    throw new Error(`Failed to read file from filesystem path ${filePath}: ${error.message}`)
  }
}
