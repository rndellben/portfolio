"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import {GlobeDemo} from "./GridGlobe"
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img?:string
  imgClassName?:string
  titleClassName?:string
  spareImg?:string
}) => {
    const [copied,setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('rbcalilung@gmail.com');

        setCopied(true);
    }

    return (
        <div
          className={cn(
            "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
            className
          )}
          style={{
            background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className={`relative w-full h-full ${id === 6 ? 'flex justify-center' : ''}`}>
            {/* Image Background */}
            {img && (
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={img}
                  alt={img}
                  className={cn(
                    'absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover/bento:opacity-50 transition-opacity duration-300',
                    imgClassName
                  )}
                />
              </div>
            )}
    
            {/* Spare Image */}
            {spareImg && (
              <div className={`absolute right-0 -bottom-5 ${id === 5 ? 'w-full opacity-80' : ''}`}>
                <img
                  src={spareImg}
                  alt={spareImg}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            )}
    
            {/* Background Gradient Animation for ID 6 */}
            {id === 6 && (
              <BackgroundGradientAnimation>
                <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
              </BackgroundGradientAnimation>
            )}
    
            {/* Content */}
            <div 
              className={cn(
                titleClassName, 
                'relative md:h-full flex flex-col px-5 p-5 lg:p-10 z-10 transform transition-transform duration-300 group-hover/bento:translate-x-2'
              )}
            >
              <div 
                className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 
                           opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300"
              >
                {description}
              </div>
              <div 
                className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 
                           transform transition-transform duration-300 group-hover/bento:translate-x-2"
              >
                {title}
              </div>
            
            {id===2 && <GlobeDemo/>}

            {id === 3 && (
            <div className="absolute -right-3 lg:-right-2 flex w-fit gap-1 lg:gap-3">
                <div className="flex flex-col gap-1 lg:gap-2">
                {['React.js', 'Next.js', 'Tailwind CSS'].map((item) => (
                    <span 
                    key={item} 
                    className="rounded-lg bg-[#10132e] px-2 py-1 text-xs text-center opacity-50 lg:text-sm lg:py-2 lg:px-2 lg:opacity-50"
                    >
                    {item}
                    </span>
                ))}
                <span className="rounded-lg bg-[#10132e] px-2 py-2 text-center" />
                </div>
                <div className="flex flex-col gap-1 lg:gap-2">
                <span className="rounded-lg bg-[#10132e] px-2 py-2 text-center" />
                {['Laravel', 'MySql', 'Git'].map((item) => (
                    <span 
                    key={item} 
                    className="rounded-lg bg-[#10132e] px-2 py-1 text-xs text-center opacity-50 lg:text-sm lg:py-2 lg:px-2 lg:opacity-50"
                    >
                    {item}
                    </span>
                ))}
                </div>
            </div>
            )}

            {id===6 && (
                <div className="mt-5 relative ">
                    <div className={`absolute -bottom-5 right-0`}>
                        <Lottie
                        options={{
                            loop:copied,
                            autoplay:copied,
                            animationData,
                            rendererSettings:{
                                preserveAspectRatio:'xMidYMid slice',
                            }

                        }}/>
                    </div>
                    <MagicButton
                    title={copied ? 'Email Copied' : 'Copy Email'}
                    icon={<IoCopyOutline/>}
                    position="left"
                    otherClasses="!bg-[#161a31]"
                    handleClick={handleCopy}/>
                </div>
            )}
          </div>
        </div>
        </div>
      );
    };