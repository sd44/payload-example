'use client'

import { useCallback } from 'react'
import { Model } from 'survey-core'
import 'survey-core/i18n/simplified-chinese'
import { Survey } from 'survey-react-ui'
import 'survey-core/survey-core.css'
import { BorderlessLight } from 'survey-core/themes'

import { json } from '@/data/survey_json.js'

export default function SurveyComponent() {
  const survey = new Model(json)
  survey.autoAdvanceAllowComplete = true
  survey.autoAdvanceEnabled = true

  survey.locale = 'zh-cn'
  survey.applyTheme(BorderlessLight)

  const alertResults = useCallback((survey: Model) => {
    const results = JSON.stringify(survey.data)
    alert(results)
  }, [])

  survey.onComplete.add(alertResults)

  return <Survey model={survey} />
}
