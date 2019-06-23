import posed from 'react-pose'

const transitionDuration = 100
const transitionDelay = 250

const Transition = posed.div({
  enter: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    delay: transitionDelay,
    blur: 10,
  },
  exit: {
    y: 50,
    filter: 'blur(10px)',
    beforeChildren: true,
    opacity: 0,
    transition: { duration: transitionDuration },
  },
})

export default Transition
