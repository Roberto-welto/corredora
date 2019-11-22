import {MatPaginatorIntl} from '@angular/material';
const spanishLabels = (page: number, pageSize: number, length: number) => {
    if(length == 0 || pageSize == 0) {return `0 de ${length}`;}

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    const endIndex = startIndex < length ? 
      Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
    
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  }
  export function getSpanishLabels(){
    const paginatorIntl = new MatPaginatorIntl();

    paginatorIntl.itemsPerPageLabel = 'Polizas por pagina:';
    paginatorIntl.nextPageLabel = 'Siguiente pagina';
    paginatorIntl.lastPageLabel = 'Ultima pagina';
    paginatorIntl.firstPageLabel = 'Primera pagina'
    paginatorIntl.previousPageLabel = 'Pagina anterior';
    paginatorIntl.getRangeLabel = spanishLabels;

    return paginatorIntl;
  }