// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/f 1.jpg",
    figure: "media/f 2.jpg",
    title: " DOTS, ILUMINACIÓN.",
    about: "Es una luminaria que está hecha de yeso sobre tela, las que generan diferentes pliegues , logrando proyectar sombras asimétricas e irregulares.",
}, {
    figure: "media/a2.jpg",
    title: "APA, pensando en todos.",
    about: "Es un producto de emergencia enfocado en darles una nueva alternativa a familias vulnerables para el traslado de algún integrante que presente movilidad reducida en sus extremidades",
}, {
    figure: "media/k1.jpg",
    title: "KIPIT, conservalo fresco,conservalo kipit.",
    about: "Serie de dispositivos que se mantienen fríos durante 16 horas luego de que el ambiente supere los 25°C y esté afectado el servicio eléctrico.",
}, {
    figure: "media/z1.jpg",
    title: "COMEDERO, guacamayos zologico metropolitano",
    about: "Se realizó un comedero colgante para los guacamayos, y este buscaba que se incentivara sus habilidades innatas para su alimentación, y  ampliar su movilidad dentro del recinto.",
}, {
    figure:"media/o1.jpg",
    title: "GOS,juego de equilibrio",
    about: "Es un producto que está pensado para integrar las actividades circenses, especialmente el área del equilibrio en los espacios urbanos, permitiendo ser un artículo accesible en su uso debido a la simpleza y versatilidad.",
}, {
    figure:"media/d1.jpg",
    title: "ILUSTRACIÓN,diseños propios",
    about: "Realizo diferentes ilustraciones con diseños propios, con diferentes fines como la creación de calendarios, papelerías, etc.",
}, {
    figure:"media/m1.JPG",
    title: "CONTIGO,mujeres campesinas de melipeuco.",
    about: "La creacion de un producto educativo, que busca trasmitir la herencia de una zona para niños de 3 a 10 años, con el fin de complementar su educación.",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';

    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
