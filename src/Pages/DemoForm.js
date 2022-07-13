import React, { useEffect, useState, useRef } from 'react';
import Layout from '../Layout';

function DemoForm() {

    const [tab, setTab] = useState(1)

    const [openmenuone, setOpenmenuone] = useState(false)
    
    const ref = useRef()
    useEffect(() => {
        const checkout = (e) => {
            if (openmenuone && ref.current && !ref.current.contains(e.target)) {
                setOpenmenuone(false);
            }
        };
        document.addEventListener("click", checkout);
        return () => {
            document.removeEventListener("click", checkout)
        }
    }, [openmenuone]);

    return (
      <Layout>
          <div>
            <div className="tab-main-box mt-5">
                <div className="button-box"   >
                    <button onClick={() => setTab(1)} className={`${tab === 1 ? 'active-btn' : 'button'}`}>Tab One</button>
                    <button onClick={() => setTab(2)} className={`${tab === 2 ? 'active-btn' : 'button'}`}>Tab Two</button>
                    <button onClick={() => setTab(3)} className={`${tab === 3 ? 'active-btn' : 'button'}`}>Tab Three</button>
                    <button onClick={() => setTab(4)} className={`${tab === 4 ? 'active-btn' : 'button'}`}>Tab Four</button>
                    <button onClick={() => setTab(5)} className={`${tab === 5 ? 'active-btn' : 'button'}`}>Tab Five</button>
                </div>
                <div className="content-box mt-5">
                    <div className={`${tab === 1 ? ' box-one active-content' : "box-one"}`}>
                        <h4>Content 1</h4>
                        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nihil necessitatibus odit laborum quia ipsam autem aspernatur fuga earum dolorum aliquam magni repellendus optio sequi, fugiat vero non voluptatibus voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut recusandae perferendis reprehenderit esse sapiente soluta suscipit vitae harum praesentium eius, cumque voluptatem laudantium maxime aut ipsam cupiditate blanditiis quia.</h3>
                        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nihil necessitatibus odit laborum quia ipsam autem aspernatur fuga earum dolorum aliquam magni repellendus optio sequi, fugiat vero non voluptatibus voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut recusandae perferendis reprehenderit esse sapiente soluta suscipit vitae harum praesentium eius, cumque voluptatem laudantium maxime aut ipsam cupiditate blanditiis quia.</h3>
                    </div>

                    <div className={`${tab === 2 ? ' box-one active-content' : "box-one"}`}>
                        <h4>Content 2</h4>
                        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nihil necessitatibus odit laborum quia ipsam autem aspernatur fuga earum dolorum aliquam magni repellendus optio sequi, fugiat vero non voluptatibus voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut recusandae perferendis reprehenderit esse sapiente soluta suscipit vitae harum praesentium eius, cumque voluptatem laudantium maxime aut ipsam cupiditate blanditiis quia.</h3>
                    </div>

                    <div className={`${tab === 3 ? ' box-one active-content' : "box-one"}`}>
                        <h4>Content 3</h4>
                        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nihil necessitatibus odit laborum quia ipsam autem aspernatur fuga earum dolorum aliquam magni repellendus optio sequi, fugiat vero non voluptatibus voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut recusandae perferendis reprehenderit esse sapiente soluta suscipit vitae harum praesentium eius, cumque voluptatem laudantium maxime aut ipsam cupiditate blanditiis quia.</h3>
                        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nihil necessitatibus odit laborum quia ipsam autem aspernatur fuga earum dolorum aliquam magni repellendus optio sequi, fugiat vero non voluptatibus voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut recusandae perferendis reprehenderit esse sapiente soluta suscipit vitae harum praesentium eius, cumque voluptatem laudantium maxime aut ipsam cupiditate blanditiis quia.</h3>
                    </div>

                    <div className={`${tab === 4 ? ' box-one active-content' : "box-one"}`}>
                        <h4>Content 4</h4>
                        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nihil necessitatibus odit laborum quia ipsam autem aspernatur fuga earum dolorum aliquam magni repellendus optio sequi, fugiat vero non voluptatibus voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut recusandae perferendis reprehenderit esse sapiente soluta suscipit vitae harum praesentium eius, cumque voluptatem laudantium maxime aut ipsam cupiditate blanditiis quia.</h3>
                    </div>

                    <div className={`${tab === 5 ? ' box-one active-content' : "box-one"}`}>
                        <h4>Content 5</h4>
                        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nihil necessitatibus odit laborum quia ipsam autem aspernatur fuga earum dolorum aliquam magni repellendus optio sequi, fugiat vero non voluptatibus voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut recusandae perferendis reprehenderit esse sapiente soluta suscipit vitae harum praesentium eius, cumque voluptatem laudantium maxime aut ipsam cupiditate blanditiis quia.</h3>
                        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nihil necessitatibus odit laborum quia ipsam autem aspernatur fuga earum dolorum aliquam magni repellendus optio sequi, fugiat vero non voluptatibus voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut recusandae perferendis reprehenderit esse sapiente soluta suscipit vitae harum praesentium eius, cumque voluptatem laudantium maxime aut ipsam cupiditate blanditiis quia.</h3>
                    </div>
                </div>


            </div>

          
        </div>
      </Layout>

    );
}

export default DemoForm;
