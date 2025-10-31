import React from "react";
import CounterItem from "./counter-item";

const counterData = [
  {id:1,count: 50, suffix: "+", duration: 1, title: "Team Member" },
  {id:2,count: 75, suffix: "+", duration: 1, title: "Project Done" },
  {id:3,count: 25, suffix: "+", duration: 1, title: "Happy Clients" },
  {id:4,count: 5, suffix: "+", duration: 1, title: "Winning Award" },
];

export default function CounterOne() {
  return (
    <section className="counter-area tp-counter-wrap mb-90">
      <div className="container">
        <div
          className="tp-counter-bg wow fadeInUp"
          data-wow-delay=".3s"
          data-background="assets/img/bg/counter-bg1.png"
          style={{ backgroundImage: `url(/assets/img/bg/counter-bg1.png)` }}
        >
          <div className="row">
            {counterData.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="tp-counter-item text-center">
                <h3 className="tp-counter-count mb-10">
                  <CounterItem min={0} max={item.count}/>
                  {item.suffix}
                </h3>
                <p>{item.title}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
