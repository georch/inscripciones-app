<template>
  <div class="welcome">
    <div class="columns is-centered">
      <div class="column is-8">
        <div class="content">
          <p>Bienvenido al centro de inscripciones del FICM 2018.<br />
            Solicitamos leer cuidadosamente las instrucciones.</p>

          <div class="listado">
            <h3>Listado de trabajos</h3>
          </div>

          <div>
            <h3>Instrucciones</h3>

            <p>Para iniciar su inscripción, vaya al apartado "Inscribir nuevo trabajo" e ingrese el título original de su trabajo, entonces presione el botón "agregar". Repita el proceso para inscripciones adicionales. No hay límite en el número de trabajos que cada solicitante puede inscribir. Una lista de sus trabajos inscritos y en proceso de inscripción aparecerá en esta página, y podrá editar la información de cada trabajo en proceso de inscripción haciendo clic en el título original correspondiente.</p>
            <p>El proceso de <strong>inscripción</strong> se encuentra dividido en <strong>8 pasos</strong>. Para asegurar que su borrador quede resguardado después de completar cada paso, haga clic en el botón "Guardar". </p>
            <p>Su inscripción permanecerá como en proceso en el sistema hasta que usted haya ingresado y verificado toda la información de cada paso, aceptado el reglamento del Festival y hecho clic en el botón "Inscribir trabajo" en el último paso del proceso de inscripción, momento en el cual cambiará el status de su trabajo y ahora estará listado en el apartado "trabajos inscritos". Antes de ese momento, podrá acceder a su(s) borrador(es) y hacer cambios cuantas veces sean necesarias visitando el sitio del Festival, haciendo clic en "Inscripciones" e ingresando el correo electrónico y la contraseña con las cuales se dio de alta.</p>
            <p>Dado que su información será publicada en el catálogo del FICM en caso de que su trabajo quede seleccionado, le pedimos que <em>NO utilice sólo mayúsculas</em>.</p>
            <p>Los datos obligatorios aparecen marcados con un asterisco (*). El sistema no permitirá inscribirse  si no se ha ingresado toda la información necesaria o si no se han subido las imágenes solicitadas:</p>
            <p>Del paso <strong>1 al 5</strong> se deberá proporcionar información relacionada con la descripción general del trabajo.</p>
            <p>En el <strong >paso 6</strong> sugerimos contar con su trabajo en línea con la clave de acceso restringida y opción de descarga.</p>
            <p>En el <strong>paso 7</strong> es necesario proporcionar las siguientes imágenes:</p>

            <ol>
              <li>Al menos un <em>still</em> de la película en archivos JPEG o PNG de al menos 300 dpi de resolución. Si usted no capturó imágenes en foto fija durante su rodaje, se solicita seleccionar alguna foto, algún diseño, dibujo, o cualquier elemento visual que pueda representar a su trabajo en nuestro catálogo en caso de quedar seleccionado.</li>
              <li>Foto(s) del director o directores tipo credencial.</li>
            </ol>

            <p>En el <strong>paso 8</strong>, se recomienda no hacer clic en "Inscribir trabajo" hasta no estar seguro que toda la información ingresada sea la correcta, ya que el sistema no le permitirá hacer cambios posteriores.</p>

            <HelpBlock>
              <h5>NOTAS:</h5>
              <p>El proceso de envío de imágenes dependerá de la velocidad de su conexión a Internet, por lo cual en ocasiones podrá demorar algunos minutos. Al hacer clic sobre el botón para guardar las imágenes, se le mostrará una barra de progreso para indicarle el avance del envío.</p>
              <p>En caso de que decida enviar DVDs o Blu-ray de su trabajo, le pedimos que lo haga <strong>sólo hasta que haya terminado todo el proceso y cuente con su número de registro</strong>. Es necesario enviarlos correctamente rotulados con el título de la película, nombre del director, duración, año de producción y número de inscripción a alguna de las direcciones que estipula el reglamento del Festival. Si cuenta con su trabajo en línea, proporcione la liga de su trabajo y el código de acceso. </p>
            </HelpBlock>

            <p>Para cualquier duda o pregunta acerca del sistema de inscripciones, le pedimos que nos escriba a <a href="mailto:inscripciones@moreliafilmfest.com">inscripciones@moreliafilmfest.com</a>, o llame al (55) 5533 1241 Ext. 206 de lunes a viernes entre las 10:30 y las 14:30 horas.</p>
            <p>Agradecemos su interés.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelpBlock from '@/components/HelpBlock';

export default {
  name: 'Welcome',
  components: {
    HelpBlock,
  },
};
</script>

<style scoped>
.welcome {
  margin-top: 30px;
}
</style>
