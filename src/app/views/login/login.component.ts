import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilService } from 'src/app/services/util.service';

@Component({
    selector: 'musiclink-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
    routeQueryParams$: Subscription

    constructor(private dialog: MatDialog, private route: ActivatedRoute, private router: Router, private utilService: UtilService) {
        this.routeQueryParams$ = route.queryParams.subscribe(params => {
            console.log('alo', params);
            if(params['dialog']) {
                this.openLoginDialog();
            }
        })
     }

    ngOnDestroy(): void {
        this.routeQueryParams$.unsubscribe();
    }

    openLoginDialog(): void {
        const dialogRef = this.dialog.open(LoginDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            this.utilService.showMessage('Funciona!!');
            this.router.navigate(['.'], { relativeTo: this.route });
        })
    }


}

@Component({
    selector: 'musiclink-login-dialog',
    templateUrl: './login-dialog.component.html'
})
export class LoginDialogComponent {
    constructor(public dialogRef: MatDialogRef<LoginDialogComponent>) { }
    onCancelClick(): void {
        this.dialogRef.close();
    }
}