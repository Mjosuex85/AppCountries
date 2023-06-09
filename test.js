  <div class="barra">
        <div class="texto-animado">
          <span>Texto desplazándose</span>
          <span>Texto 2</span>
          <span>Texto 3</span>
          <span>Texto 4</span>
        </div>
      </div>

// CSS

.barra {
    width: 30%;
    height: 50px;
    background-color: #ccc;
    overflow: hidden;
    position: relative;
  }
  
  .texto-animado {
    position: relative;
    white-space: nowrap;
    animation: desplazamiento 8s linear infinite;
    opacity: 0;
  }
  
  @keyframes desplazamiento {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      opacity: 1;
    }
  }


//spinner

<div className="spinner-border text-primary">
          <span className="sr-only" />
 </div>
  
  
