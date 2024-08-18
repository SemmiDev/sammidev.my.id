import clsx from 'clsx';
import * as React from 'react';
import {
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiGo,
  SiRedis,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiVuedotjs,
  SiNuxtdotjs,
  SiLaravel,
  SiSpringboot,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiJaeger,
  SiOpentelemetry,
  SiLinux,
  SiGitlab,
  SiGithub,
  SiElasticsearch,
} from 'react-icons/si';

import CustomLink from '@/components/links/CustomLink';
import Tooltip from '@/components/Tooltip';

export default function TechStack() {
  return (
    <div className='flex flex-wrap gap-3 '>
      {stacks.map((tech) => (
        <Tooltip key={tech.id} tipChildren={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'h-8 w-8 md:h-10 md:w-10',
              'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
              'transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'go',
    icon: SiGo,
    tooltip: (
      <>
        <CustomLink href=''>Go</CustomLink>
      </>
    ),
  },
  {
    id: 'laravel',
    icon: SiLaravel,
    tooltip: (
      <>
        <CustomLink href=''>Laravel</CustomLink>
      </>
    ),
  },
  {
    id: 'springboot',
    icon: SiSpringboot,
    tooltip: (
      <>
        <CustomLink href=''>SpringBoot</CustomLink>
      </>
    ),
  },
  {
    id: 'ansible',
    icon: SiAnsible,
    tooltip: (
      <>
        <CustomLink href=''>Ansible</CustomLink>
      </>
    ),
  },
  {
    id: 'prometheus',
    icon: SiPrometheus,
    tooltip: (
      <>
        <CustomLink href=''>Prometheus</CustomLink>
      </>
    ),
  },
  {
    id: 'loki',
    icon: SiGrafana,
    tooltip: (
      <>
        <CustomLink href=''>Grafana</CustomLink>
      </>
    ),
  },
  {
    id: 'otel',
    icon: SiOpentelemetry,
    tooltip: (
      <>
        <CustomLink href=''>Opentelemetry</CustomLink>
      </>
    ),
  },
  {
    id: 'linux',
    icon: SiLinux,
    tooltip: (
      <>
        <CustomLink href=''>Linux</CustomLink>
      </>
    ),
  },
  {
    id: 'gitlab',
    icon: SiGitlab,
    tooltip: (
      <>
        <CustomLink href=''>Gitlab</CustomLink>
      </>
    ),
  },
  {
    id: 'github',
    icon: SiGithub,
    tooltip: (
      <>
        <CustomLink href=''>Github</CustomLink>
      </>
    ),
  },
  {
    id: 'jaeger',
    icon: SiJaeger,
    tooltip: (
      <>
        <CustomLink href=''>Jaeger</CustomLink>
      </>
    ),
  },
  {
    id: 'redis',
    icon: SiRedis,
    tooltip: (
      <>
        <CustomLink href=''>Redis</CustomLink>
      </>
    ),
  },
  {
    id: 'mysql',
    icon: SiMysql,
    tooltip: (
      <>
        <CustomLink href=''>My SQL</CustomLink>
      </>
    ),
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
    tooltip: (
      <>
        <CustomLink href='https://tailwindcss.com/'>Tailwind CSS</CustomLink> is
        awesome, I have never achieved this much reusability. Make sure you get
        the{' '}
        <CustomLink href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'>
          extension
        </CustomLink>
        .
      </>
    ),
  },
  {
    id: 'mongodb',
    icon: SiMongodb,
    tooltip: (
      <>
        <CustomLink href=''>Mongo DB</CustomLink>
      </>
    ),
  },
  {
    id: 'elastic',
    icon: SiElasticsearch,
    tooltip: (
      <>
        <CustomLink href=''>Elastic</CustomLink>
      </>
    ),
  },
  {
    id: 'docker',
    icon: SiDocker,
    tooltip: (
      <>
        <CustomLink href=''>Docker</CustomLink>
      </>
    ),
  },
  {
    id: 'vue',
    icon: SiVuedotjs,
    tooltip: (
      <>
        <CustomLink href=''>Vue</CustomLink>
      </>
    ),
  },
  {
    id: 'nuxt',
    icon: SiNuxtdotjs,
    tooltip: (
      <>
        <CustomLink href=''>Nuxt</CustomLink>
      </>
    ),
  },
  {
    id: 'react',
    icon: SiReact,
    tooltip: (
      <>
        <CustomLink href=''>React</CustomLink>
      </>
    ),
  },
  {
    id: 'next',
    icon: SiNextdotjs,
    tooltip: (
      <>
        <CustomLink href=''>Next</CustomLink>
      </>
    ),
  },
];
