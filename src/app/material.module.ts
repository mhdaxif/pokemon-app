import { MatListModule, MatNavList } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';

// TODO: Split modules component/module wise. 
export const materiaModules = [
    MatListModule,
    MatToolbar,
    MatInputModule,
    MatIcon,
    MatGridList,
    MatGridTile,
    MatCardTitle,
    MatCardActions,
    MatPaginator,
    MatSidenav,
    MatNavList,
    MatSidenavContainer,
    MatSidenavContent,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatButton,
    MatPaginatorModule
];
