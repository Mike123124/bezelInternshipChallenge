/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable array-callback-return */
/* eslint-disable prettier/prettier */
import React from 'react';
import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

interface ModalProps {
  data: any;
}
function Modal({ data }: ModalProps) {
  if (!data) {
    return null;
  }

  function acceptOrder() {
    axios
      .post(
        'https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept'
      )
      .then((response) => {
        console.log('Order accepted:', response.data);
      })
      .catch((error) => {
        console.error('Failed to accept order:', error);
      });
  }

  function declineOrder() {
    axios
      .post(
        'https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline'
      )
      .then((response) => {
        console.log('Order declined:', response.data);
      })
      .catch((error) => {
        console.error('Failed to decline order:', error);
      });
  }

  function formatNumber(num: number): string {
    return (num / 100).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function calculateCommission(
    salePriceCents: number,
    commissionRateBips: number
  ): number {
    const commissionRate = commissionRateBips / 10000;
    const commissionCents = salePriceCents * commissionRate;
    return commissionCents;
  }

  return (
    <div className="w-full flex-col items-center gap-[30px] rounded-xl bg-white p-2 py-4">
      <div className="flex flex-row-reverse">
        <FontAwesomeIcon className="h-6 text-[#525150]" icon={faTimes} />
      </div>
      <div className="flex flex-row  px-12 ">
        <div className="flex w-full flex-col items-start gap-6 py-4">
          <h3 className="mt-6 text-sm font-semibold text-[#aeafad]">
            CONGRATS!
          </h3>
          <p className="text-2xl font-semibold text-[#215148]">
            Your watch sold!
          </p>
          <p className="font-base w-2/3 py-2 text-left text-sm text-[#aeafad]">
            You have 1 business day to accept the sale. If you do not accept, it
            will be automatically rejected.
          </p>
          <div className="flex flex-col gap-4 py-4">
            <Button
              onClick={() => {
                acceptOrder();
              }}
            >
              Accept Sale
            </Button>
            <button
              type="button"
              onClick={() => {
                declineOrder();
              }}
              className="text-sm font-semibold text-[#030303]"
            >
              Reject Sale
            </button>
          </div>
        </div>
        <div className="flex min-w-[350px] flex-col rounded-[40px] bg-[#f6f4f1] py-8 px-4">
          <div className="h-0.5 w-full bg-[#e3e1de]" />
          {data && (
            <div className="flex flex-col gap-1">
              <div className="flex flex-row justify-between gap-1 p-4">
                <div className="flex flex-col gap-1 text-left text-sm">
                  <p className=" whitespace-nowrap text-xs font-semibold text-[#305850]">
                    {`${data.listing?.model?.brand?.displayName} ${data.listing?.model?.displayName}`}
                  </p>
                  <p className="whitespace-nowrap text-xs font-semibold text-[#305850]">
                    Gerald Genta {data.listing?.model?.referenceNumber}
                  </p>
                  <span className="text-xs text-[#73857f]">
                    {' '}
                    {data.listing?.condition} / {data.listing?.manufactureYear}
                  </span>
                </div>

                <img
                  className="h-16 w-16 rounded-lg"
                  src={data?.listing?.images[0]?.image?.url}
                  alt="watch image"
                />
              </div>
              <div className="h-0.5 w-full bg-[#e3e1de]" />

              <div className="flex flex-col gap-2 p-4 text-xs font-thin">
                <div className="flex flex-row justify-between font-semibold text-[#98a49f]">
                  Selling Price:{' '}
                  <span className="font-semibold text-[#47524e]">
                    ${formatNumber(data.salePriceCents)}
                  </span>
                </div>
                <div className="flex flex-row justify-between font-semibold text-[#98a49f]">
                  Level 1 Commission (8.5%):{' '}
                  <span>
                    $
                    {formatNumber(
                      calculateCommission(
                        data.salePriceCents,
                        data.commissionRateBips
                      )
                    )}
                  </span>
                </div>
                <div className="flex flex-row justify-between font-semibold text-[#98a49f]">
                  Seller fee: <span>${formatNumber(data.sellerFeeCents)}</span>
                </div>
                <div className="flex flex-row justify-between font-semibold text-[#98a49f]">
                  Insured Shipping: <span>Free</span>
                </div>
                <div className="flex flex-row justify-between font-semibold text-[#559e8d]">
                  Bezel authentication: <span>Free</span>
                </div>
              </div>
              <div className="h-0.5 w-full bg-[#e3e1de]" />
              <div className="flex items-start justify-between p-4 text-xs font-semibold text-[#121615] ">
                Earnings <span>${formatNumber(data.payoutAmountCents)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
