import React from 'react';
import { LayersIcon, NetworkIcon, OrbitIcon, TelescopeIcon } from 'lucide-react';
import type { TopicId } from '../../types/content';

const ICONS: Record<TopicId, React.ComponentType<{className?: string;strokeWidth?: number;}>> = {
  'agentic-systems': NetworkIcon,
  'ai-native-architecture': LayersIcon,
  'philosophy-of-technology': TelescopeIcon,
  'future-of-work': OrbitIcon
};

export function TopicIcon({ id, className = 'h-5 w-5' }: {id: TopicId;className?: string;}) {
  const Icon = ICONS[id];
  return (
    <span aria-hidden="true" className="contents">
      <Icon className={className} strokeWidth={1.5} />
    </span>);

}