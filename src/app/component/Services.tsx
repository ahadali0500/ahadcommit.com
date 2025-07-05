import Link from 'next/link';
import React from 'react';
import { services } from '@/app/data/services';

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                My Quality Services
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique web
                project that inspires you and your customers.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-12 col-md-6 mb-4 mt-4" key={index}>
              <div
                className="service-item d-flex flex-column justify-content-between wow fadeInUp h-100"
                data-wow-delay={`.${index + 5}s`}
              >
                <div className="left-box d-flex align-items-center mb-3">
                  <span className="number me-3">{service.number}</span>
                  <h5 className="service-title mb-0">{service.title} <Link href={`/services/${service.slug}`} style={{color:'#8750f7'}} className="btn btn-link"><i  className="fa fa-external-link" style={{marginLeft:'12px'}} aria-hidden="true"></i></Link>
                  </h5>
                </div>
                <div className="right-box">
                  <p>{service.description}</p>
                </div>
                <i className="flaticon-up-right-arrow" />
                <button
                  data-mfp-src="#service-wrapper"
                  className="service-link modal-popup"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
