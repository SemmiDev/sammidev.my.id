import clsx from 'clsx';
import * as React from 'react';

import { trackEvent } from '@/lib/analytics';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';
import Tooltip from '@/components/Tooltip';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='Clarence is a front-end developer that started learning in May 2020. He write blogs about his approach and mental model on understanding topics in front-end development.'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout pt-20'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>Sammi Aldhi Yanto</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              <img
                src='/images/sammi.jpeg'
                className='float-right rounded-xl ml-6 w-40 md:w-72'
                width='1500'
                height='1695'
                alt='Photo of me looking really professional and definitely can impress your boss'
                title=' '
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hello! I'm Sammi Aldhi Yanto. I build fast, robust, secure and
                  reliable web application. Currently a software engineer at PT
                  Garuda Cyber Indonesia.
                </p>
                <p data-fade='4'>
                  There are a lot of things and technologies to learn in backend
                  development and I am motivated to learn as much as possible. I
                  enjoy learning something new and getting feedback to make
                  myself better and improve.
                </p>
              </article>
              <h3 className='mt-12' data-fade='8'>
                Tech Stack
              </h3>
              <figure className='mt-2' data-fade='9'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Contact</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>
                Do contact me if you need my opinion about web development,
                especially backend works. I’ll be happy to help! (find my email
                in the footer)
              </p>
            </article>
          </div>
        </section>

        <section id='uses'>
          <div className='layout mt-16'>
            <h2>Uses</h2>
            <img
              className='mt-8'
              src='/images/setup2.jpeg'
              width={2000}
              height={1125}
              alt='Photo of my desk setup'
            />
            <article className='prose mt-4 dark:prose-invert'>
              <ul>
                <li>MacBook Air M1 2020</li>
                <li>BenQ 24 Inch 1080 FHD 100Hz (GW2490)</li>
                <li>Keychron K2 V2</li>
                <li>Apple Magic Trackpad, Silver 2021</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
