type HeaderProps = {
  title?: string
}

export default function Header({ title = 'Field Notes' }: HeaderProps) {
  return (
    <header className="site-header">
      <h1 className="site-title">{title}</h1>
    </header>
  )
}
