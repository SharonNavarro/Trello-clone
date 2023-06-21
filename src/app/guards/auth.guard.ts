import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@services/token.service';

export const AuthGuard: CanActivateFn = () => {
    const token = inject(TokenService).getToken();
    const router = inject(Router);

    if(!token) {
      router.navigate(['/login']);
      return false;
    }
    return true;
}
