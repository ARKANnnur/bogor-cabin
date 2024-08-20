import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 z-50"
    >
      <Image src={logo} height="50" width="50" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
