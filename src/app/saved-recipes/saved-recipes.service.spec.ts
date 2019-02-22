import { TestBed } from '@angular/core/testing';

import { SavedRecipesService } from './saved-recipes.service';

describe('SavedRecipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavedRecipesService = TestBed.get(SavedRecipesService);
    expect(service).toBeTruthy();
  });
});
