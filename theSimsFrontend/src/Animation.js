export const baseVariants={
    hidden:{},
    visible:{},
    exit:{},
}

export const fadeInVariant={
  hidden:{
   y:1000,
   opacity:0
  },
  visible:{
   y:0,
   opacity:1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      
  }
  },
  exit:{

  },
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
      y:"-3000px",
      opacity: 0,
      transition: {
        duration: 3,
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


  export const tagVariants = {
    hidden: {
        opacity: 0,
        x:50
    },
    onFilter: {
        opacity: 1,
        x:0,
        transition: {
            duration: .5
        }
    },
    onClose: {
      opacity: 1,
      x:0,
      transition: {
          duration: .5
      }
  },

    exit: {
   
    }

  }

  