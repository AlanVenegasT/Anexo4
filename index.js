const puppeteer = require('puppeteer');

const createPDFBuffer = async (contenido, opciones) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('about:blank');
  await page.setContent(contenido);
  const buffer = await page.pdf(opciones);
  await browser.close();
  return buffer;
};

const opciones = {
  format: 'Letter', // A3, A4, A5, Legal, Letter 
  landscape: false,
  margin: {
    top: '.8cm',
    right: '.6cm',
    bottom: '.6cm',
    left: '.6cm',
  },
  printBackground: true,
};

const contenido = `

<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <style>
    
      * {
        font-family: Arial, sans-serif;
      }

      .container {
        flex-direction: column;
        width: 100%;
      }



      .column {
        height: auto;
        flex: 1;
      }
      
      .column-1 {
        background-color: #3B3838;
        color: white;
        border-top: 1px solid black;
        border-bottom: 0px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        padding-top: 10px;
        padding-left: 15px;
        padding-bottom: 10px;
        padding-right: 10px;
        font-weight: 600;
        font-size: 13px;
      }
      
      .column-2 {
        background-color: #D9D9D9;
        text-align: center;
        font-size: 12px; 
        padding-left: 20px;
        padding-right: 20px;
        border: 1px solid black;
        font-weight: 400;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .tituloysub{
        font-size: 12px; 
        text-align: center; 
        line-height: 0px;
      }

      .segundatablablanca{
        border-color: #A6A6A6; 
        font-size: 10px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #FFFFFF; 
      }

      .segundatablablanca2{
        border-color: #A6A6A6; 
        font-size: 10px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
      }
       
      .seccionIyII {
        font-size: 12px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }



      .fondbordseccI{
        background-color: #FFFFFF; 
        border-color: #A6A6A6;
      }

      .trestitulosSeccionII{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .titulosseccionII{
        width: 10%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

        .tresopciones{
          width: 10%; 
          background-color: #ffffff; 
          border-color: #A6A6A6; 
          padding-left: 0px; 
          padding-right: 0px; 
          padding-top: 0px;
        }
        

        .contenedortresopciones{
          height: 100%; 
          display: flex; 
          justify-content: 
          space-between; 
          align-items: center;
        }



      .primeraopcion{
          width: 100%; 
          background-color: white; 
          height: 33.33%; 
          border-bottom: 1px solid #A6A6A6; 
          padding-bottom: 0px;
      }

      .segundaopcion{
        width: 100%; 
        background-color: white; 
        height: 33.33%; 
        border-bottom: 1px solid #A6A6A6; 
        padding-top: 0px; 
        padding-bottom: 4px;
      }

     

      .terceraopcion{
        width: 100%; 
        background-color: white; 
        height: 33.33%; 
        padding-top: 0px; 
        padding-bottom: 0px; 
        margin-bottom: 0px; 
      }

      .margendospx{
        margin-left: 2px;
      }

      .margendospxsize{
        margin-left: 2px;
        font-size: 6px;
      }

      .paddingtrecepx{
        padding-left: 13px;
      }

      .paddingcincopx{
        padding-left: 5px;
      }

      .diseñocolumnahojados{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .bodytablahojauno{
        width: 100%; 
        background-color: #ffffff; 
        border-color: #A6A6A6;
      }

      .espaciotabladearriba{
        margin-top: 12px;
      }

      .primerparrafo{
        font-size: 7.5px; 
        font-weight: 600; 
        text-align: center; 
        line-height: 8px; 
        padding-top: 35px;
      }

  

      .tituloseccionII{
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }

      .seccionIIsubtitulos3{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .temasseccionII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .filaseccionII{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .casillaenblancoseccionIII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px;
      }

      .contenedortresopcionesseccionIII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        padding-top: 0px;
      }

      .tresopcionesseccionIII{
        height: 100%; 
        display: flex; 
        justify-content: space-between; 
        align-items: center;
      }

      .casillascirculos{
        width: 10%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .tituloseccionIV{
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }

      .opcionesseccionIV{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .filasseccionIV{
        font-size: 8px; 
        text-align: center; 
        line-height: 4px;
      }

      .casillascirculostexto{
        width: 70%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: start; 
        line-height: 8px; 
        padding-left: 5px;
      }

      .firmasynombre{
        width: 50%; 
        height: 45px; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .filafirmasynombre{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .parrafodos{
        font-size: 10px; 
        font-weight: 400; 
        text-align: justify; 
        line-height: 10px;
      }

      .interlineadodiezpx{
        line-height: 10px;
      }

      .interlineadoochopx{
        line-height: 8px;
      }

      .container2 {
        width: 100%;
        overflow: auto;
      }

      .seccion1{
        float: left;
        width: 49%; 
      }
      .seccion2{
        float: right;
        width: 49%;
        
        text-align: center;
      }
      
      table {
        border-collapse: collapse;
        width: 100%;
      }
  
      th {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
      }

      td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
        height: 0px;
      }
  
      th {
        background-color: #ddd;
      }
  
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      
      .container3 {
        position: absolute;
        display: flex;
        height: 80px; /* altura del 100% del viewport */
        width: 100%; /* ancho del 100% del viewport */

      }
      
      .tablacompleta {
        page-break-inside: avoid;
      }

      .seccion1columnllenadasmedio{
        text-align: center; 
        line-height: 7px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 10px; 
        padding: 6px 0 6px 0;
      }

      .seccion2columnllenar{
        text-align: center; 
        line-height: 10px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6; 
        font-size: 10px; 
        padding: 2px 2px 2px 2px;
      }

      .seccion3titulos{
        text-align: center; 
        line-height: 10px; 
        background-color: #FFFFFF; 
        border-color: #A6A6A6;  
        font-size: 10px; 
        padding: 0;
      }

      </style>
    


      <title>Document</title>
    </head>

    


  <body >

  

    <div> <!----------------------------------Hoja 1 ----------------------->

    <div class="container">
        <div class="column column-1">gob<span style="color: red;">.</span>mx </div>
        <div class="column column-2"> Agencia Nacional de Seguridad Industrial y de Protección al Medio Ambiente del Sector Hidrocarburos
        Unidad de Gestión Industrial</div>
    </div>
 
    <div class="container">
        <h2 class="tituloysub" style=" padding-top: 5px; font-weight: 400; " >Anexo IV</h2>
    
        <p class="tituloysub" style="  padding-top: 0px; padding-bottom: 3px; line-height: 11px;" >Formato informe trimestral del programa de Detección y Reparación de Fugas (reporte anual de cumplimiento del PPCIEM)</p>
        </div>
    
    <div class="container2 ">
       <div class="seccion1"> 
       <table class="tablacompleta">
       <tr>
         <td class="segundatablablanca2">Homoclave del formato</td>
       </tr>
       <tr>
         <td class="segundatablablanca">FF-ASEA-032</td>
       </tr>
       <tr>
         <td class="segundatablablanca2" >Lugar de elaboración</td>
       </tr>
       <tr>
         <td class="segundatablablanca"> Hola </td>
       </tr>
     </table>
       </div>

       <div class="seccion2"> 
       <table class="tablacompleta">
       <tr>
         <td class="segundatablablanca2" >Fecha de publicación del formato en el DOF</th>
       </tr>
       <tr>
         <td class="segundatablablanca"> 06 11 2018</td>
       </tr>
       <tr>
         <td class="segundatablablanca2" >Fecha de elaboración</td>
       </tr>
       <tr ">
         <td class="segundatablablanca">DD MM AAAA</td>
       </tr>
     </table>
    </div>



    <div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="4" style="font-size: 12px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección I. Datos generales</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 20%;" class="seccion1columnllenadasmedio" >Nombre de la instalación</td>
                <td style="width: 30%;" class="seccion1columnllenadasmedio" ></td>
                <td style="width: 20%;" class="seccion1columnllenadasmedio" >Ubicación de la instalación</td>
                <td style="width: 30%;" class="seccion1columnllenadasmedio" ></td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 20%;" class="seccion1columnllenadasmedio">CURR</td>
                <td style="width: 30%;" class="seccion1columnllenadasmedio"></td>
                <td style="width: 20%;" class="seccion1columnllenadasmedio">Trimestre correspondiennte</td>
                <td style="width: 30%;" class="seccion1columnllenadasmedio"></td>
            </tr>
            
        </table>
    </div>
</div>
    

<div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="10" style="font-size: 12px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección II. Resumen Trimestral</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 12%;" class="seccion2columnllenar" >Número total de equipos y Componentes en los que se llevaron a cabo los procedimientos de detección.</td>
                <td style="width: 12%;" class="seccion2columnllenar">Número total de Fugas detectadas</td>
                <td style="width: 12%;" class="seccion2columnllenar">Número total de Fugas reparadas</td>
                <td style="width: 12%;" class="seccion2columnllenar">Número total de Fugas no reparadas</td>
                <td style="width: 13%;" class="seccion2columnllenar">Número total de equipos y Componentes reemplazados.</td>
                <td style="width: 13%;" class="seccion2columnllenar">Volumen total de metano fugado (g/kg/t)</td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 12%;" class="seccion2columnllenar" >Número total de equipos y Componentes en los que se llevaron a cabo los procedimientos de detección.</td>
                <td style="width: 12%;" class="seccion2columnllenar" ></td>
                <td style="width: 12%;" class="seccion2columnllenar" ></td>
                <td style="width: 12%;" class="seccion2columnllenar" ></td>
                <td style="width: 13%;" class="seccion2columnllenar" ></td>
                <td style="width: 13%;" class="seccion2columnllenar" ></td>
            </tr>
        </table>
    </div>
</div>

    
  <div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="10" style="font-size: 12px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección III. Detalle de informe trimestral</td>
            </tr>
            <tr style="width: 100%; ">
                <td style="width: 10%;"  class="seccion3titulos">Id del equipo o Componente</td>
                <td style="width: 9%;  " class="seccion3titulos" >Tipo de equipo o Componente</td>
                <td style="width: 10%;"  class="seccion3titulos">Fecha en la que se detectó la Fuga (dd/mm)</td>
                <td style="width: 10%;"  class="seccion3titulos">Concentración previa a la reparación (ppm)</td>
                <td style="width: 10%;"  class="seccion3titulos">¿Pudo ser reparado el equipo o componente?</td>
                <td style="width: 10%;"  class="seccion3titulos">Fecha de reparación (dd/mm) </td>
                <td style="width: 10%;"  class="seccion3titulos">Concentración posterior a la reparación (ppm) </td>
                <td style="width: 10%;"  class="seccion3titulos">Volumen de metano fugado (g/kg/t)</td>
                <td style="width: 10%;"  class="seccion3titulos">Fecha de reemplazo del equipo o Componente (dd/mm)</td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 9%; " class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos">
                <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
                  <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
                    <label ><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div style="width: 50%; padding-top: 6px;">
                    <label ><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
            </tr>

            <tr style="width: 100%; ">
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 9%; " class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos">
                <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
                  <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
                    <label ><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div style="width: 50%; padding-top: 6px;">
                    <label ><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
            </tr>


            <tr style="width: 100%; ">
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 9%; " class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos">
                <div style="display: -webkit-box; display: -ms-flexbox; display: flex; width: 100%">
                  <div style="width: 50%; border-right: 1px solid #A6A6A6; padding-top: 6px; padding-bottom: 6px; ">
                    <label ><input type="radio" style=" margin-right: 4px;" name="estado">Si</label>
                  </div>
                  <div style="width: 50%; padding-top: 6px;">
                    <label ><input type="radio" style=" margin-right: 4px;" name="estado">No</label>
                  </div>
                </div>
                </td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
                <td style="width: 10%;" class="seccion3titulos"></td>
            </tr>

            
        </table>
    </div>
</div>


   
   
  
  </div> <!----------------------------------Hoja 1 Fin ----------------------->

  <div> <!----------------------------------Hoja 2  -------------------------->


  


  



  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td  class="seccionIyII" >Nombre del responsable técnico</td>
        <td  class="seccionIyII" >Firma del responsable técnico</td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
      <tr class="filafirmasynombre" >
        <td class="firmasynombre"> <label class="margendospx"> </td>
        <td class="firmasynombre"> <label class="margendospx"> </td>
      </tr>
      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>

  <div>
    <p class="parrafodos"> Los datos personales recabados para la atención de su trámite serán protegidos, incorporados y tratados, con fundamento en el artículo  15 de la 
    LFPA, Lo anterior en cumplimiento del décimo séptimo de los lineamientos de protección de datos personales publicados en el Diario Oficial de la 
    Federación el 30 de septiembre de 2005.
     </p>
  <div>

  <div class="container">
  <p class="primerparrafo" >De conformidad con el artículo 4 de la Ley Federal de Procedimiento Administrativo, los formatos para solicitar trámites y servicios deberán publicarse en el Diario Oficial de la
  Federación (DOF).</p>
</div>


  </div> <!----------------------------------Hoja 2 Fin ----------------------->

  <div> <!----------------------------------Hoja 3 --------------------------->


  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td class="seccionIyII" >Instructivo para el llenado del formato Anexo IV </td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; font-size: 11px; background-color: #ffffff; border-color: #A6A6A6;  ">
      <tr style="filasseccionIV" >
        <td style="width: 100%; height: 45px; background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; line-height: 7px;">  
        
        <p class="text-align: start;  padding: 0px; margin: 0px; line-height: 0px; left: 2%;"> <strong><span style=" color: transparent;">---</span>Indicaciones generales</strong><p>
          <ol type="a" style="font-size: 11px;> 
            <li class="interlineadodiezpx">Esta solicitud deberá ser llenada en computadora. 
            <li class="interlineadodiezpx">Esta solicitud deberá presentarse a la Agencia en medios físicos, magnéticos o electrónicos.
          </ol>

        <div style=" position: relative; width: 100%;">
        <p class="text-align: start; left: 2%;"> <strong><span style=" color: transparent;">---</span>Información requerida en el formato</strong><p>
        <div>
        <ol type="I" start="1" >
          <li>Sección I: Datos generales</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px;  ">
                <li class="interlineadodiezpx" >Escribir el nombre de la instalación</li>
                <li class="interlineadodiezpx" >Escribir la ubicación de la instalación. Domicilio y coordenadas geográficas en UTM (shape file)</li>
                <li class="interlineadodiezpx" >Escribir la Clave Única de Registro del Regulado</li>
                <li class="interlineadodiezpx" >Indicar el trimestre que corresponde a dicho formato</li>
              
            </ol>
          <li>Sección II: Resumen Trimestral</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px; ">
                <li class="interlineadodiezpx" >Anotar el total de los equipos y Componentes en los que se llevaron a cabo los procedimientos de detección. </li>
                <li class="interlineadodiezpx" >Anotar el total de Fugas detectadas.</li>
                <li class="interlineadodiezpx" >Anotar el total de Fugas reparadas </li>
                <li class="interlineadodiezpx" >Anotar el total de Fugas no reparadas</li>
                <li class="interlineadodiezpx" >Anotar el total de equipos y Componentes reemplazados</li>
                <li class="interlineadodiezpx" >Anotar el volumen total de metano fugado en gramos (g). kilogramos(kg) o toneladas (t).</li>
                </ol>
          <li>Sección III: Detalle de informa trimestral
            <ol type="a" style=" padding-top: 5px; padding-bottom: 0px; ">
                <li class="interlineadodiezpx" >Se deberá llenar un renglón por cada equipo o Componente. </li>
                <li class="interlineadodiezpx" >Anotar el id del equipo o Componente.</li>
                <li class="interlineadodiezpx" >Indicar el tipo de equipo o Componente de acuerdo con lo establecido en el articulo 13 de las presentes Disposiciones.</li>
                <li class="interlineadodiezpx" >Indicar la fecha de detección de la Fuga en el equipo o Componente.</li>
                <li class="interlineadodiezpx" >Anotar la concentración, en partes por millón, de la Fuga previa a la reparación.</li>
                <li class="interlineadodiezpx" >Indicar con una X si la Fuga fue reparada o no.</li>
                <li class="interlineadodiezpx" >Indicar la fecha en la cual la Fuga fue reparada</li>
                <li class="interlineadodiezpx" >Indicar la fecha en la cual se comprobó la reparación de la Fuga</li>
                <li class="interlineadodiezpx" >Anotar la concentración, en partes por millón, de la Fuga posterior a la reparación.</li>
                <li class="interlineadodiezpx" >Escribir el volumen de metano fugado en gramos (g), kilogramos(kg) o toneladas (t).</li>
                <li class="interlineadodiezpx" >Indicar la fecha de reemplazo del equipo o Componente que  no pudo ser reparado.</li>
            </ol>
          </li>
          
        </ol>        
        </td>
      </tr>
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>

 
  
  </div> <!----------------------------------Hoja 3 Fin ----------------------->

  


 
   
  <!--Footer 1--> 
  <div style=" width:100%; height: auto; bottom: 0; background-color: #D9D9D9; border-top: 1px solid #767171; margin-top: 12px;" >
  <div style="width:22%; height: auto; display:inline-block; left:0; vertical-align: middle;  "> <img src="https://i.imgur.com/09HeOR0.png" width="100px" height="auto" style="padding-left: 18px; padding-bottom: 15px;" > </div>
  <div style="width:11%; height: auto; display:inline-block; left:20%; vertical-align: middle; "> <img src="https://i.imgur.com/Kz7xzj7.png" width="60px" height="auto"  style="padding-bottom: 11px;"> </div>
  <div style="width:11%; height: auto; display:inline-block; left:40%; vertical-align: middle; "> <img src="https://i.imgur.com/mp2K5fP.png" width="60px" height="auto"  style="padding-bottom: 15px;"> </div>
  <div style="width:12%; height: auto; display:inline-block; left:60%; vertical-align: middle;  "> <img src="https://i.imgur.com/Ws1Ngrd.png" width="60px" height="auto" style="padding-bottom: 15px;" > </div>
  <div style="width:39%; height: auto; display:inline-block; left:80%;"> 
      <p style=" line-height: 0px; padding: 0px; padding-top: 10px; margin: 0px; font-size: 8px; font-weight: 600; ">Contacto: </p>  
      <p style=" line-height: 9px; font-size: 7px; padding-right: 50px; "> Boulevard Adolfo Ruiz Cortines No. 4209,
      Colonia Jardines en la Montaña, C.P. 14210,
      Delegación Tlalpan, Ciudad de México,
      Teléfono (+52.55) 9126-0100</p>
  </div>


  </body>
  
  </html>

`;

createPDFBuffer(contenido, opciones)
  .then(buffer => {
    const directorio = './public/files/constancia.pdf';
    require('fs').writeFileSync(directorio, buffer);
    console.log('archivo creado');
  })
  .catch(error => console.error(error));
