#!/bin/bash

mkdir -p subestaciones
TOTAL=700
FALLO_INDEX=$((RANDOM % TOTAL))

for ((i = 0; i < TOTAL; i++)); do
  FILENAME=$(printf "subestaciones/subestacion_%03d.txt" "$i")

  if [[ $i -eq $FALLO_INDEX ]]; then
    base=$((RANDOM % 10000 + 15000))
    printf "%d,%d" "$base" "$((base - 15000))" > "$FILENAME"
  else
    v1=$((RANDOM % 24000 + 1000))
    delta=$((RANDOM % 5000 + 1))
    v2=$((v1 - delta))
    printf "%d,%d" "$v1" "$v2" > "$FILENAME"
  fi
done

echo "Generados $TOTAL ficheros en ./subestaciones (uno con diferencia exacta de 15000)."
