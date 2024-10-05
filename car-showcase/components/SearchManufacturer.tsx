'use client';

import { SearchManufacturerProps } from '@/types';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { manufacturers } from '@/app/constants';

// When we don't want to add an additional element to the DOM we can use fragment.

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  console.log(query);

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLocaleLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ''))
        );
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <ComboboxButton className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='Car Logo'
            />
          </ComboboxButton>
          <ComboboxInput
            className='search-manufacturer__input'
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions>
              {filteredManufacturers.length === 0 && query !== '' && (
                <ComboboxOption
                  value={query}
                  className='search-manufacturer__option'
                >
                  Create "{query}"
                </ComboboxOption>
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
