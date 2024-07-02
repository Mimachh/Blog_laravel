import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'relative inline-flex items-center px-3 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'text-neutral-950'
                    : ' text-neutral-400') +
                className
            }
        >
            {children}

            {/* {active && (<div className='w-full h-px bg-accent rounded-full absolute -bottom-0 left-1/2 -translate-x-1/2' />)} */}
        </Link>
    );
}
