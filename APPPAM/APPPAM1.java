import javax.swing.*;

class inicioPAM 
{
    public String reglamentoPOO()
    {
        return "Reglamento POO: \n"
        + "1.- Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\n"
        + "2.- Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, "
        + "pero no se tomará la asistencia (Solamente en los horarios de inicio: 7:00 a.m y 14:00 p.m).\n"
        + "3.- Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores "
        + "a la hora de falta en clase mediante correo del tutor(a). Justificantes entregados fuera de la fecha límite no se aceptan. "
        + "Únicamente se aceptarán recetas médicas y citatorios jurídicos (de forma física deben ser presentados al tutor para ser validados y de forma posterior emitidos).\n"
        + "4.- Las tareas y trabajos deberán subirse al Classroom de forma individual y no se recibirán de manera extemporánea (salvo previo justificante validado por el tutor).\n"
        + "5.- Las tareas y trabajos deben presentarse en tiempo y forma. La demora sin justificante o con justificante fuera del límite no se acepta.\n"
        + "6.- Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\n"
        + "7.- El plagio o copia de trabajos y/o exámenes será condicionado a reprobar la asignatura y se reportará al área correspondiente.\n"
        + "8.- Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final.\n"
        + "9.- En caso de indisciplina o falta de respeto hacia docentes, administrativos, compañeros o cualquier persona de la universidad, "
        + "se realizará una primera llamada de atención; si el alumno hace caso omiso tendrá que abandonar el aula. Tres incidencias de este tipo implican perder derecho a examen final o parcial.\n"
        + "10.- El uso de laptops y dispositivos móviles quedará limitado a actividades que así lo requieran.\n"
        + "11.- Prohibido el uso de audífonos durante la clase.\n"
        + "12.- Prohibido comer y/o tomar líquidos en el salón.\n"
        + "13.- Prohibido sentarse encima de las mesas, así como columpiarse en las sillas.\n"
        + "14.- Todo tema académico debe ser revisado primero con el docente, luego con el tutor, de ser necesario con la coordinación de tutores y, si no se resuelve, con la dirección del programa educativo.\n"
        + "15.- Cualquier situación no prevista en este reglamento pasará directamente a la dirección del programa educativo.\n"
        + "16.- El día de entrega de calificaciones todos los estudiantes deben estar presentes; ese día se entregarán exámenes y se brindará retroalimentación.\n"
        + "17.- Este reglamento entra en vigor después de ser firmado o aceptado por la mayoría de los estudiantes asistentes a la primera sesión de la materia. "
        + "Una vez firmado o aceptado por el 50% más el jefe de grupo, es vigente para todo alumno inscrito aunque no haya estado presente.";
    }
    public String lineamientosClassroom()
    {
        return "Lineamientos de classroom: \n"
        +"1.- Entregar los trabajos para su revisión.\n"
        +"2.- Entegas en PDF.\n"
        +"3.- Avisos de clase.\n"
        +"4.- Entregas autorizadas con retraso, 5 Calif Max.";
    }
    public String Fechasdeparcial()
    {
        return "Fechas de parciales: \n"
        +"1er parcial: 01-octubre-2025 \n"
        +"2do parcial: 05-noviembre-2025 \n"
        +"3er parcial: 03-diciembre-2025 \n"
        +"Final: 08-diciembre-2025 ";
    }
    public String PorcentajesPorParcial()
    {
        return "Porcentajes por parcial: \n"
        +"1ER PARCIAL: \n"
        +"Conocimiento: 40% \n"
        +"Desempeño: 20% \n"
        +"Producto: 30% \n"
        +"Proyecto Integrador: 10% \n"
        +"2DO PARCIAL: \n"
        +"Conocimiento: 40% \n"
        +"Desempeño: 20% \n"
        +"Producto: 20% \n"
        +"Proyecto Integrador: 20% \n"
        +"3ER PARCIAL: \n"
        +"Conocimiento: 20% \n"
        +"Desempeño: 10% \n"
        +"Producto: 40% \n"
        +"Proyecto Integrador: 30% \n";
    }
}
public class APPPAM1
{
    public static void main(String[] args)
    {
     inicioPAM pam = new inicioPAM();
     int opcion;
     
     do{
         String menu = "MENU \n"
         +"1.- Reglamento POO \n"
         +"2.- Lineamientos de classroom \n"
         +"3.- Fechas de parciales  \n"
         +"4.- Porcentajes por parciales \n"
         +"5.- Salir \n"
         +"Elige una opcion: \n";
         String menus = JOptionPane.showInputDialog(menu);
         if(menus == null)
         {
            break;
         }
         opcion = Integer.parseInt(menus);
         switch(opcion)
          {
            case 1:
            JOptionPane.showMessageDialog(null, pam.reglamentoPOO());
            break;
            case 2:
            JOptionPane.showMessageDialog(null, pam.lineamientosClassroom());
            break;
            case 3:
            JOptionPane.showMessageDialog(null, pam.Fechasdeparcial());
            break;
            case 4:
            JOptionPane.showMessageDialog(null, pam.PorcentajesPorParcial());
            break;
            case 5:
            JOptionPane.showMessageDialog(null, "Saliendo de la APP.....");
            break;
            default:
            JOptionPane.showMessageDialog(null, "No existe la opcion");
          }    
        }while(opcion != 5);
    }
           
}
        
     
    



    