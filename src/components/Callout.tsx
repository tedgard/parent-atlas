import { useTranslation } from 'react-i18next'

type CalloutVariant = 'key-idea' | 'try-tonight' | 'seek-help'

interface CalloutConfig {
  icon: string
  bg: string
  border: string
  text: string
  labelKey: string
}

const CONFIG: Record<CalloutVariant, CalloutConfig> = {
  'key-idea':    { icon: '💡', bg: 'bg-blue-50',   border: 'border-blue-200',  text: 'text-blue-900',  labelKey: 'callout.keyIdea'    },
  'try-tonight': { icon: '🌙', bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-900', labelKey: 'callout.tryTonight' },
  'seek-help':   { icon: '🏥', bg: 'bg-amber-50',  border: 'border-amber-200', text: 'text-amber-900', labelKey: 'callout.seekHelp'   },
}

interface CalloutProps {
  variant?: CalloutVariant
  children?: React.ReactNode
}

export function Callout({ variant = 'key-idea', children }: CalloutProps) {
  const { t } = useTranslation()
  const cfg = CONFIG[variant]

  return (
    <div className={`my-4 rounded-xl border p-4 ${cfg.bg} ${cfg.border}`}>
      <div className={`flex items-center gap-2 font-semibold text-sm mb-2 ${cfg.text}`}>
        <span>{cfg.icon}</span>
        <span>{t(cfg.labelKey)}</span>
      </div>
      <div className={`text-sm leading-relaxed ${cfg.text}`}>{children}</div>
    </div>
  )
}

export function KeyIdea({ children }: { children?: React.ReactNode }) {
  return <Callout variant="key-idea">{children}</Callout>
}

export function TryTonight({ children }: { children?: React.ReactNode }) {
  return <Callout variant="try-tonight">{children}</Callout>
}

export function SeekHelp({ children }: { children?: React.ReactNode }) {
  return <Callout variant="seek-help">{children}</Callout>
}
