#!/bin/bash

file=.version

old_version=$(sed -n -e '/REACT_APP_VERSION/ s/.*\= *//p' $file)

parts__old_version=($(echo $old_version | tr "." "\n"))
v=${parts__old_version[0]}
r=${parts__old_version[1]}
b=${parts__old_version[2]}

echo 'Digite uma das opções e pressione ENTER:';
echo '
v <VERSION>
r <RELEASE>
b <BUG>
'
read type_build;

case $type_build in
  "v")
    echo "Gerando uma nova versão..."
    version="$(($v + 1)).$(($r)).$(($b))"
    ;;
  "r")
    echo "Gerando versão de nova implementação..."
    version="$(($v)).$(($r + 1)).$(($b))"
    ;;
  "b")
    echo "Gerando versão de correções..."
    version="$(($v)).$(($r)).$(($b + 1))"
    ;;
  "*")
    echo "Comando não identificado"
    exit
    ;;
esac

if ! [ -z "$version" ]; then
  echo "Compilando versão $version"
  sed -i -e "s/\(REACT_APP_VERSION=\).*/\1$version/" $file
  GENERATE_SOURCEMAP=false REACT_APP_VERSION=$version react-scripts build
  git add .
  git commit -m "build $version"
else
  echo "Erro ao gerar versão"
  exit 1
fi
