import { Component, Input, OnInit } from '@angular/core';
import { ReleaseNew } from '../../models/release-new.model';

@Component({
    selector: 'app-release-news-table',
    templateUrl: './release-news-table.component.html',
    styleUrls: ['./release-news-table.component.scss']
})
export class ReleaseNewsTableComponent implements OnInit {

    @Input() labels      : any;
    @Input() showCustomer: boolean = true;
    @Input() releaseNews : ReleaseNew[];

    public tableColumns = [
        { header: 'Disponibilidad', type: "date", format: "date"   , field: 'creationDate'   },
        { header: 'Novedad'       , type: "text", format: "default", field: 'description' }
    ];

    public globalFilterFields: string[] = [ 'description' ];

    ngOnInit(): void {

        this.releaseNews.map((release) => {
            release['disabled'] = false;
           console.log(release.creationDate.)
          /*   console.log("----------",release.creationDate) */
            return true;
        })

    }

    private parseDate = (date: Date) => {
        const dateObj = new Date(date);
        // Obtener el nombre del mes en formato abreviado (MMM)
        const month = dateObj.toLocaleString('default', { month: 'short' });
        // Obtener el año en formato YYYY
        const year = dateObj.getFullYear();
        // Formatear la fecha como "MMM-YYYY" (por ejemplo, "Jul-2023")
        const formattedDate = `${month}-${year}`;
        console.log(formattedDate)
        
    }

}
