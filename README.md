# Cross-site-Scripting-Angular-1.18
Payload XSS Angular.js &lt; 1.18
https://cdn.appdesign.dev/wp-content/uploads/2020/08/Agencia-desarrollo-Angular-JS.jpg
**Angular 1.13 - 1.18**

Angular es un paquete que le permite escribir aplicaciones web del lado del cliente como si tuviera un navegador más inteligente. También le permite usar HTML como su lenguaje de plantilla y le permite ampliar la sintaxis de HTML para expresar los componentes de su aplicación de forma clara y sucinta.
Las versiones afectadas de este paquete son vulnerables a Cross-site Scripting (XSS). XSS puede activarse en aplicaciones AngularJS que desinfectan fragmentos de HTML controlados por el usuario antes de pasarlos a JQLitemétodos como JQLite.prepend, JQLite.after, JQLite.append, JQLite.replaceWith, JQLite.appendy .new JQLiteangular.element
JQLite (biblioteca de manipulación de DOM que forma parte de AngularJS) manipula el HTML de entrada antes de insertarlo en el DOM en formato jqLiteBuildFragment.
Una de las modificaciones realizadas amplía una etiqueta de cierre automático XHTML .Si jqLiteBuildFragmentse llama (por ejemplo, a través new JQLite(aString)de ) con una cadena HTML controlada por el usuario que se desinfectó (por ejemplo, con DOMPurify ), la transformación realizada por JQLite puede modificar algunas formas de una carga útil inerte y desinfectada en una carga útil que contiene JavaScript, y desencadenar un XSS cuando la carga útil se inserta en DOM.

**Cross Site Scripting (XSS)**

Con respecto a la vulnerabilidad de Cross site Scripting, esta permite la interpretación de 
código Javascript o HTML arbitrario por parte del navegador de un usuario. Mediante ingeniería 
social, un usuario malicioso puede aprovechar esta vulnerabilidad para llevar a cabo ataques 
contra usuarios legítimos de la aplicación; buscando obtener credenciales válidas de acceso a 
los sistemas vulnerables, causar una denegación de servicio o incluso comprometer el equipo 
de la víctima. Para que este ataque sea efectivo, es necesario que el usuario acceda a un enlace 
especialmente modificado por un atacante.

**¿Cómo comprobarlo?**

- Abrir la consola del navegador sobre la web que queremos comprobar
- Ejecutar el siguiente comando:

   > const inertPayload = `<div><style><style/><img src=x onerror="alert(Hello XSS)"/>`
   > angular.element(document.childNodes).append(inertPayload);

Payload:
    ![image](https://user-images.githubusercontent.com/93614373/175279760-65b393de-ba06-4a8e-9d31-d5def7bbf7f2.png)
    
Ventana emergente al ser vulnerable:
![image](https://user-images.githubusercontent.com/93614373/175279876-ac60a27d-e8de-4025-a1fa-0e070c74e162.png)
