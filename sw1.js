self.addEventListener("install", () => {
    console.log("SW: Instalado");
  });
  
  self.addEventListener("fetch", e => {
      // marca error porque necesitamos conexion para hacer fetch
      const respOffFile = fetch('pages/view-offline.html');
  
      const resp = fetch(e.request)
          .catch( () => {
              console.log("SW: Error en la peticion");
              return respOffFile;
          });
  
  
     // console.log(e.request.url);
  
      e.respondWith(resp)
      
  });
  