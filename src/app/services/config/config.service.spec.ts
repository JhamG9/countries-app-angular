import { TestBed } from '@angular/core/testing';
import { Constants } from 'src/app/utils/constants';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Testing function loadThemeInStorage when is default', () => {
    localStorage.setItem(Constants.storageKeys.darkTheme, 'false');
    expect(service.loadThemeInStorage()).toBeUndefined();
  });
});
