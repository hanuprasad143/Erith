"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ErrMsg from "../err-msg";


type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  inquiryReason: string;
  preferredLanguage: string;
  companyName: string;
  requestDetails: string;
  country: string;
  businessAddress: string;
  phone: string;
  state: string;
  city: string;
  postalCode: string;
  agreeUpdates: boolean;
  recaptcha: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!recaptchaVerified) {
      alert("Please verify you are not a robot before submitting.");
      return;
    }
    console.log("Form Submitted:", data);
  };

  const handleRecaptchaChange = (value: string | null) => {
    if (value) {
      setRecaptchaVerified(true);
      setValue("recaptcha", value);
    } else {
      setRecaptchaVerified(false);
    }
  };

  return (
    <div
      className="contact-section mx-auto px-3"
      style={{ maxWidth: "1200px" }}
    >
      {/* Heading */}
      <h4 className="mb-2" style={{ fontSize: "36px", fontWeight: 600 }}>
        Learn More
      </h4>
      <h1 className="mb-4" style={{ fontSize: "55px", color: "#555" }}>
        Submit an Inquiry
      </h1>

      <form
        id="contact-form"
        className="row g-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Row 1 */}
        <div className="row g-3">
          {/* Email */}
          <div className="col-md-4">
            <div className="tp-contact-input position-relative">
              <i className="fa fa-envelope field-icon"></i>
              <input
                type="email"
                {...register("email", { required: "Email required" })}
                placeholder="Email"
                className="ps-5 uniform-field"
              />
              {errors.email && <ErrMsg msg={errors.email.message} />}
            </div>
          </div>

          {/* First Name */}
          <div className="col-md-4">
            <div className="tp-contact-input position-relative">
              <i className="fa fa-user field-icon"></i>
              <input
                type="text"
                {...register("firstName", { required: "First Name required" })}
                placeholder="First Name"
                className="ps-5 uniform-field"
              />
              {errors.firstName && <ErrMsg msg={errors.firstName.message} />}
            </div>
          </div>

          {/* Last Name */}
          <div className="col-md-4">
            <div className="tp-contact-input position-relative">
              <i className="fa fa-user field-icon"></i>
              <input
                type="text"
                {...register("lastName", { required: "Last Name required" })}
                placeholder="Last Name"
                className="ps-5 uniform-field"
              />
              {errors.lastName && <ErrMsg msg={errors.lastName.message} />}
            </div>
          </div>

          {/* Inquiry Reason */}
          <div className="col-md-4">
            <div className="tp-contact-input position-relative">
              <i className="fa fa-question-circle field-icon"></i>
              <select
                {...register("inquiryReason", {
                  required: "Select inquiry reason",
                })}
                className="ps-5 uniform-field form-select"
              >
                <option value="">Inquiry Reason</option>
                <option value="general">General</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
              </select>
              {errors.inquiryReason && (
                <ErrMsg msg={errors.inquiryReason.message} />
              )}
            </div>
          </div>

          {/* Preferred Language */}
          <div className="col-md-4">
            <div className="tp-contact-input position-relative">
              <i className="fa fa-language field-icon"></i>
              <select
                {...register("preferredLanguage", {
                  required: "Select language",
                })}
                className="ps-5 uniform-field form-select"
              >
                <option value="">Preferred Language</option>
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
              </select>
              {errors.preferredLanguage && (
                <ErrMsg msg={errors.preferredLanguage.message} />
              )}
            </div>
          </div>

          {/* Company Name */}
          <div className="col-md-4">
            <div className="tp-contact-input position-relative">
              <i className="fa fa-building field-icon"></i>
              <input
                type="text"
                {...register("companyName")}
                placeholder="Company Name"
                className="ps-5 uniform-field"
              />
            </div>
          </div>

          {/* Request Details */}
          <div className="col-12">
            <div className="tp-contact-input position-relative">
              <i
                className="fa fa-pencil field-icon"
                style={{ top: "12px" }}
              ></i>
              <textarea
                {...register("requestDetails", {
                  required: "Request details required",
                })}
                placeholder="Request Details"
                className="ps-5 pt-3 uniform-field"
                rows={4}
              ></textarea>
              {errors.requestDetails && (
                <ErrMsg msg={errors.requestDetails.message} />
              )}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row g-3 mt-2">
          {/* Country */}
          <div className="col-md-4">
            <div className="position-relative">
              <i className="fa fa-globe field-icon"></i>
              <select
                {...register("country", { required: "Select country" })}
                className="uniform-field form-select ps-5"
              >
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="india">India</option>
              </select>
            </div>
            {errors.country && <ErrMsg msg={errors.country.message} />}
          </div>

          {/* Business Address */}
          <div className="col-md-4">
            <div className="position-relative">
              <i className="fa fa-map-marker field-icon"></i>
              <input
                {...register("businessAddress")}
                placeholder="Business Address"
                className="uniform-field form-control ps-5"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="col-md-4">
            <div className="position-relative">
              <i className="fa fa-phone field-icon"></i>
              <input
                {...register("phone")}
                placeholder="Phone Number"
                className="uniform-field form-control ps-5"
              />
            </div>
          </div>

          {/* State */}
          <div className="col-md-4">
            <div className="position-relative">
              <i className="fa fa-map field-icon"></i>
              <input
                {...register("state")}
                placeholder="State"
                className="uniform-field form-control ps-5"
              />
            </div>
          </div>

          {/* City */}
          <div className="col-md-4">
            <div className="position-relative">
              <i className="fa fa-city field-icon"></i>
              <input
                {...register("city")}
                placeholder="City"
                className="uniform-field form-control ps-5"
              />
            </div>
          </div>

          {/* Postal Code */}
          <div className="col-md-4">
            <div className="position-relative">
              <i className="fa fa-mail-bulk field-icon"></i>
              <input
                {...register("postalCode")}
                placeholder="Postal Code"
                className="uniform-field form-control ps-5"
              />
            </div>
          </div>
        </div>

        {/* Updates Checkbox */}
        <div className="mt-3 d-flex align-items-center gap-2">
          <input
            type="checkbox"
            {...register("agreeUpdates", { required: true })}
            style={{ width: "18px", height: "18px", cursor: "pointer" }}
          />
          <span style={{ fontSize: "14px" }}>
            <i className="fa fa-bell me-1 text-warning"></i>I agree to receive
            updates and news from Erith Global.
          </span>
        </div>
        {errors.agreeUpdates && (
          <ErrMsg msg="You must agree before submitting" />
        )}

        {/* reCAPTCHA */}
        <div className="mt-4">
          <ReCAPTCHA
            sitekey="6LcS5usrAAAAAP5BQiBQzD3jTPPvmba6ldHrIPH3" // 🔑 Replace this with your actual site key
            onChange={handleRecaptchaChange}
          />
        </div>

        {/* Submit Button */}
        <div className="row mt-4">
          <div className="col-3">
            <button
              type="submit"
              className="tp-btn-inner w-100"
              style={{
                backgroundColor: "#f4d100",
                fontWeight: 600,
                borderRadius: "6px",
                height: "50px",
                marginBottom: "30px",
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>

      {/* Styles */}
      <style jsx>{`
        .uniform-field {
          height: 50px;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 15px;
          outline: none;
          transition: border 0.3s ease;
        }
        .uniform-field:focus {
          border-color: #f4d100;
          box-shadow: 0 0 3px rgba(244, 209, 0, 0.5);
        }
        textarea.uniform-field {
          height: auto;
          min-height: 100px;
          resize: vertical;
        }
        .field-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #888;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
