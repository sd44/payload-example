import { WenjuanxingEmbed } from '@/components/myui/wenjuanxing'

type Props = {
  activityId: string
  blockType: 'wenJuan'
  width: number
}

export const WenJuanBlock: React.FC<Props> = (props) => {
  const { activityId, blockType, width } = props
  return (
    <div className="m-auto max-w-8xl items-center justify-between lg:px-8">
      <WenjuanxingEmbed activityId={activityId} width={width} />
    </div>
  )
}
