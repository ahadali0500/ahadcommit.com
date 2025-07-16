// app/services/[slug]/page.tsx

import { services } from '@/app/data/services';
import type { ServiceType } from '@/app/data/services';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';
import Link from 'next/link';

// type Props = {
//   params: { slug: string };
// };

// export async function generateStaticParams() {
//   return services.map(service => ({ slug: service.slug }));
// }

// async function getServiceBySlug(slug: string) {
//   return services.find(s => s.slug === slug);
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const service = await getServiceBySlug(params.slug);
//   return {
//     title: `${service?.title} | Ahad Ali`,
//     description: service?.description,
//   };
// }

export default async function ServiceDetailPage({ params }: any) {
  // const service = await getServiceBySlug(params.slug);
  // const relatedServices = services.filter(s => s.slug !== params.slug).slice(0, 4);

  // if (!service) {
  //   return (
  //     <div className="container py-5">
  //       <div className="alert alert-warning text-center">Service not found</div>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      <main>
        {/* <section className="hero-section d-flex align-items-center" id="intro">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="mb-2 display-6 font-bold">{service.title}</h1>
                <p className="lead mb-2">{service.description}</p>
                <div className="markdown-body mt-4">
                  <ReactMarkdown>{service.details}</ReactMarkdown>
                </div>
                <div className="mt-5">
                  <Link href="/services" className="btn btn-outline-primary">
                    ← Back to Services
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="border-start ps-3 ms-3">
                  <h5 className="mb-3">Related Services</h5>
                  {relatedServices.map(rs => (
                    <div key={rs.slug} className="mb-4">
                      <Link style={{ color: 'white' }} href={`/services/${rs.slug}`} className="text-decoration-none">
                        <h6 style={{ fontSize: '15px' }}>
                          {rs.title}
                          <span>
                            <i style={{ marginLeft: '10px' }} className="fa fa-external-link" aria-hidden="true"></i>
                          </span>
                        </h6>
                      </Link>
                      <p style={{ marginTop: '-10px' }}>{rs.description.slice(0, 60)}...</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
