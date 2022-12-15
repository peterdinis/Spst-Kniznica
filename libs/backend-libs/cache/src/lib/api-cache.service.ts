import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import {GET_POSTS_CACHE_KEY} from "libs/backend-libs/shared/src/lib/constants/cache.constant";

@Injectable() 
export class ApiCachceService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
    async clearCache() {
        const keys: string[] = await this.cacheManager.store.keys();
        keys.forEach((key) => {
          if (key.startsWith(GET_POSTS_CACHE_KEY)) {
            this.cacheManager.del(key);
          }
        })
      }
}