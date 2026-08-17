"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { VectorSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {createClient} from "@/lib/supabase/client";
import { Checkbox } from "@/components/ui/checkbox";
import type { Provider } from "@supabase/supabase-js";
import {useState} from "react";


export default function Auth() {
  const supabase = createClient();
  const [isChecked, setIsChecked] = useState<string | boolean>("");
  const [isError, setIsError] = useState(false);
  const handleSigIn = async (provider:Provider) => {
    if(typeof isChecked === "string" || !isChecked){
      setIsError(true);
      return;
    } 
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
      },
    });
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white px-4">
      <div className="w-full max-w-[416px] text-center">
        {/* Logo */}
        <div className="mb-3 flex justify-center">
          <VectorSquare className="h-10 w-10" />
        </div>

        {/* Heading */}
        <h1 className="font-mono text-xl font-bold tracking-tight text-black">
          Welcome to Haulvia.
        </h1>

        <p className="mt-1 font-mono text-sm text-gray-500">
          Sign in to continue.
        </p>

        {/* OAuth Buttons */}
        <div className="mt-5 flex flex-col space-y-2">
          <Button
            variant="outline"
            className="flex cursor-pointer items-center gap-2"
            onClick={() => handleSigIn("google")}
          >
            <Image
              src="https://thesvg.org/icons/google/default.svg"
              alt="Google"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            Sign in with Google
          </Button>

          <Button
            variant="outline"
            className="mt-2 flex cursor-pointer items-center gap-2"
            onClick={() => handleSigIn("github")}
          >
            <Image
              src="https://thesvg.org/icons/github/default.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            Sign in with GitHub
          </Button>
        </div>

        {/* Terms */}
        <div className="flex items-center mt-4 gap-2">
          <Checkbox id="terms" 
            className={`border ${isError ? "border-destructive" : "border-black"}`}  
            onCheckedChange={(checked) => setIsChecked(checked)}
          />
          <p className="ml-2 text-xs  text-gray-500 text-justify">
            By clicking continue, you agree to our{" "}
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-gray-700 underline cursor-pointer underline-offset-5">
                  Terms of Service
                </button>
              </DialogTrigger>

              <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="font-mono">
                    Terms of Service
                  </DialogTitle>

                  <DialogDescription>
                    Last updated: August 17, 2026
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-5 text-sm leading-6 text-gray-600">
                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      1. Acceptance of Terms
                    </h3>
                    <p>
                      By creating an account or using Haulvia, you agree to
                      these Terms of Service. If you do not agree, please do not
                      use the service.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      2. About Haulvia
                    </h3>
                    <p>
                      Haulvia is a fleet operations platform designed to help
                      businesses manage vehicles, drivers, trips, maintenance,
                      expenses, and related operational information.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      3. Your Account
                    </h3>
                    <p>
                      You are responsible for maintaining the security of your
                      account and for activity performed through your account.
                      You agree to provide accurate information when creating
                      your account.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      4. Acceptable Use
                    </h3>
                    <p>
                      You agree not to misuse Haulvia, attempt unauthorized
                      access, interfere with the platform, or use the service
                      for unlawful activities.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      5. Your Data
                    </h3>
                    <p>
                      You retain ownership of the information you submit to
                      Haulvia. You grant Haulvia permission to process that
                      information as necessary to provide the service.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      6. Service Availability
                    </h3>
                    <p>
                      We aim to keep Haulvia reliable and available, but we
                      cannot guarantee uninterrupted access. The service may
                      occasionally be unavailable due to maintenance or
                      technical issues.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      7. Termination
                    </h3>
                    <p>
                      You may stop using Haulvia at any time. We may suspend or
                      terminate accounts that violate these terms or create a
                      security or operational risk.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      8. Changes
                    </h3>
                    <p>
                      We may update these terms from time to time. Significant
                      changes may be communicated through the platform.
                    </p>
                  </section>
                </div>
              </DialogContent>
            </Dialog>{" "}
            and{" "}
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-gray-700 underline cursor-pointer underline-offset-5">
                  Privacy Policy
                </button>
              </DialogTrigger>

              <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="font-mono">
                    Privacy Policy
                  </DialogTitle>

                  <DialogDescription>
                    Last updated: August 17, 2026
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-5 text-sm leading-6 text-gray-600">
                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      1. Information We Collect
                    </h3>
                    <p>
                      When you use Haulvia, we may collect information such as
                      your name, email address, account information, and
                      information you provide while managing your fleet.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      2. Fleet Information
                    </h3>
                    <p>
                      Haulvia may store operational information such as vehicle
                      details, driver information, trip records, maintenance
                      records, expenses, and other fleet-related data.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      3. Authentication
                    </h3>
                    <p>
                      If you sign in using Google or GitHub, we may receive
                      basic account information provided by those services,
                      such as your name, email address, and profile information
                      necessary to authenticate your account.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      4. How We Use Information
                    </h3>
                    <p>
                      We use collected information to operate Haulvia,
                      authenticate users, maintain security, improve the
                      platform, and provide customer support.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      5. Data Security
                    </h3>
                    <p>
                      We take reasonable measures to protect information stored
                      within Haulvia from unauthorized access, alteration,
                      disclosure, or destruction.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      6. Data Sharing
                    </h3>
                    <p>
                      We do not sell your personal information. We may use
                      trusted service providers that help us operate Haulvia,
                      including authentication, hosting, database, and
                      infrastructure providers.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      7. Data Retention
                    </h3>
                    <p>
                      We retain information for as long as necessary to provide
                      the service, maintain records, resolve disputes, and meet
                      applicable requirements.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      8. Your Choices
                    </h3>
                    <p>
                      Depending on your account and applicable requirements, you
                      may request access to, correction of, or deletion of
                      certain personal information associated with your account.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-semibold text-black">
                      9. Changes to This Policy
                    </h3>
                    <p>
                      We may update this Privacy Policy as Haulvia evolves. The
                      date at the top of this policy will be updated when
                      changes are made.
                    </p>
                  </section>
                </div>
              </DialogContent>
            </Dialog>
            .
          </p>
        </div>
        {(isError && !isChecked ) && (
          <p className="text-xs text-destructive mt-2 text-start">
            You must agree to the Terms and Conditions to continue.
          </p>
        )}
      </div>
    </div>
  );
}