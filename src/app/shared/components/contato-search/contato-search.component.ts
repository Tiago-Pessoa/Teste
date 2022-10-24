import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Lista } from 'src/app/core/models/lista.model';
import { ContatoService } from 'src/app/core/services/contato.service';

@Component({
  selector: 'app-contato-search',
  templateUrl: './contato-search.component.html',
  styleUrls: ['./contato-search.component.scss']
})
export class ContatoSearchComponent implements OnInit {
  contatos$!: Observable<Lista[]>;
  @Input() label = '';

private searchTerm = new Subject<string>();
@Output() private selected = new EventEmitter<Lista>();

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatos$ = this.searchTerm.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap(term => this.contatoService.search(term))
    )
  }
  onSelected(selectedItem: MatAutocompleteSelectedEvent): void {
    this.searchTerm.next("");

    const contato: Lista = selectedItem.option.value;
    this.selected.emit(contato);
  }

  search(term: string): void {
    this.searchTerm.next(term)
  }

}
