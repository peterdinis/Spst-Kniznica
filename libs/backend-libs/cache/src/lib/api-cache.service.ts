import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { GET_POSTS_CACHE_KEY } from 'libs/backend-libs/shared/src/lib/constants/cache.constant';

@Injectable()
export class ApiCachceService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async clearCache() {
    /* TODO: Later remove any */
    const appKeys: any = await this.cacheManager.keys();
    appKeys.forEach((key: string) => {
      if (key.startsWith(GET_POSTS_CACHE_KEY)) {
        this.cacheManager.delete(appKeys);
      }
    });
  }

  async addToCache(key: string) {
    const appKeys = await this.cacheManager.add(key);
    return appKeys;
  }
}
