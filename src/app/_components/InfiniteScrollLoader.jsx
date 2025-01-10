import Image from "next/image";
import spinnerI from '../../../public/spinner.svg';

function Loader() {
  return (
    <>
      <section className="infinite-scroll-loader">
        <div>
          <Image
            src={spinnerI}
            alt="spinner"
            width={56}
            height={56}
          />
        </div>
      </section>
    </>
  );
}

export default Loader;
