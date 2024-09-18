import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './core/services/loading.service';
import { takeWhile } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private componentAlive: boolean = true;
  loading: boolean = false;
  constructor(
    private loadingService: LoadingService) {
    this.loadingService.loading$
      .pipe(takeWhile(() => this.componentAlive))
      .subscribe(loading => {
        this.loading = loading;
      });
  }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    this.componentAlive = false;
  }
} 
 