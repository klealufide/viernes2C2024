<?php 

// Arreglo indexado
$etiquetaEnter = "<br>";
$paises = array("Costa Rica", "Guatemala","Nicaragua");

echo "Posicion 0 ".$paises[0].$etiquetaEnter;
echo "Arreglo: ".$etiquetaEnter;
foreach($paises as $pais){
    echo $pais.$etiquetaEnter;
}

$materia1 = array("nombre"=>"Matematica","nota"=> 80, "aprobado"=>true);
print_r($materia1);
echo $etiquetaEnter;
$materia2 = array("nombre"=>"Ingles","nota"=> 40, "aprobado"=>false);
$materia3 = array("nombre"=>"Estudios Sociales","nota"=> 100, "aprobado"=>true);


$materias = array($materia1, $materia2, $materia3);

print_r($materias);

$materias_otra_forma[] = $materia3;
$materias_otra_forma[] = $materia2;
$materias_otra_forma[] = $materia1;

echo $etiquetaEnter;

print_r($materias_otra_forma);

// CREAR ARCHIVO
/*
$archivo = fopen("miarchivo.cvs","w");
fwrite($archivo,"Hola mundo, este es mi primer archivo");
fclose($archivo);
*/
try {
    $archivo = fopen("miarchivo.txt","r");
    if(!$archivo){
        throw new Exception(("No se pudo abrir el archivo."));
    }
    while(!feof(($archivo))){
        $linea = fgets($archivo);
        echo $linea.$etiquetaEnter;
    }
    fclose($archivo);
}
catch(Exception $e){

    echo "Se ha producido un error : ".$e->getMessage();
}
