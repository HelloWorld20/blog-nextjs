import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className='text-center m-2'>
          <a rel="nofollow" className='text-gray-600' href="http://beian.miit.gov.cn/" target="_blank">粤ICP备20038895号</a>
        </div> 
      </Container>
    </footer>
  )
}

export default Footer
