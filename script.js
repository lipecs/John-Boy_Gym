function toggleVideo() {
    const video = document.getElementById("trainingVideo");
    
    if (video.style.display === "none") {
      video.style.display = "block"; // Exibe o vídeo
      video.play(); // Inicia a reprodução do vídeo
    } else {
      video.style.display = "none"; // Oculta o vídeo
      video.pause(); // Pausa a reprodução do vídeo
    }
  }
  