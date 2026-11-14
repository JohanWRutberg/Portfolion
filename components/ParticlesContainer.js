import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Must be a stable reference for the lifetime of the app
const initEngine = async (engine) => {
  await loadSlim(engine);
};

const options = {
  fullScreen: { enable: false },
  background: {
    color: {
      value: ""
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      push: {
        quantity: 90
      },
      repulse: {
        distance: 80,
        duration: 0.4
      }
    }
  },
  particles: {
    paint: {
      fill: {
        enable: true,
        color: {
          value: "#e68e2e"
        }
      }
    },
    links: {
      color: "#f5d393",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce"
      },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        // same density as v2's `area: 800` (factor 1000 × area 800 = 800 000 px²)
        width: 1000,
        height: 800
      },
      value: 100
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
};

const ParticlesContainer = () => {
  return (
    <ParticlesProvider init={initEngine}>
      <Particles className="w-full h-full absolute translate-z-0" id="tsparticles" options={options} />
    </ParticlesProvider>
  );
};

export default ParticlesContainer;
