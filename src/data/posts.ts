import type { Post } from '../types/content';
import { essays } from './essays';
import { projects } from './projects';
import { notes } from './notes';

/** All posts, any status. The UI only renders status === 'publicado' (see utils/content.ts). */
export const posts: Post[] = [...essays, ...projects, ...notes];