import Container from './container'

type Props = {
  // preview?: boolean
}

const Alert = () => {
  return (
    <div
      className='border-b bg-neutral-50 border-neutral-200'
    >
      <Container>
        <div className="py-2 text-center text-sm">
          This page is a preview.{' '}
          <a
            href="/api/exit-preview"
            className="underline hover:text-teal-300 duration-200 transition-colors"
          >
            Click here
          </a>{' '}
          to exit preview mode.
        </div>
      </Container>
    </div>
  )
}

export default Alert
