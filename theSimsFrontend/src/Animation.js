export const baseVariants={
    hidden:{},
    visible:{},
    exit:{},
}

export const fadeOutVariants = {
    hidden: {
      // opacity:0
      // // x: '-100vw',


    },
    visible: {
      opacity:1,
      transition: {
          duration: .5,
          ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .5,
        ease: "easeInOut"
      }
    }

  }
  export const fadeOutVariantsLandingNav = {
    hidden: {
        opacity: 0

    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5
        }
    },
    exit: {
        marginBottom:"500px",
        opacity: 0,
        transition: {
            duration: 5.5
        }
    }

  }

  