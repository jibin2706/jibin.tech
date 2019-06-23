import posed from 'react-pose'

const transitionDuration = 100
const transitionDelay = 100

const Transition = posed.div({
  enter: {
    opacity: 1,
    delay: transitionDelay,
    beforeChildren: true,
  },
  exit: {
    opacity: 0,
    transition: { duration: transitionDuration },
  },
})

export default Transition
