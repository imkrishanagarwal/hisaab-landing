'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';

const API_URL = 'https://svcdqdtokeifognfxeim.supabase.co/functions/v1/share-page';

type Snapshot =
  | {
      type: 'expense';
      expense_description: string;
      total_amount: number;
      payers: Array<{ name: string; amount: number }>;
      shares: Array<{ name: string; amount: number }>;
      creator_name: string;
      creator_upi_id: string | null;
      currency: string;
    }
  | {
      type: 'group';
      group_name: string;
      balances: Array<{ name: string; amount: number }>;
      expenses: Array<{ description: string; total_amount: number; paid_by: string; date: string }>;
      creator_name: string;
      creator_upi_id: string | null;
      currency: string;
    };

function formatAmount(amount: number): string {
  return `\u20B9${Math.round(Math.abs(amount)).toLocaleString('en-IN')}`;
}

function Avatar({ name }: { name: string }) {
  return (
    <div className="w-9 h-9 rounded-full bg-[#374151] flex items-center justify-center font-bold text-sm text-gray-300 shrink-0">
      {(name || '?').charAt(0).toUpperCase()}
    </div>
  );
}

function UpiButton({ upiId, payeeName, amount, currency, note }: {
  upiId: string;
  payeeName: string;
  amount: number;
  currency: string;
  note: string;
}) {
  const href = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=${encodeURIComponent(currency)}&tn=${encodeURIComponent(note)}`;
  return (
    <a
      href={href}
      className="block bg-[#F98C2F] text-black text-center py-3 px-4 rounded-xl font-bold text-sm ml-12 no-underline active:opacity-90"
    >
      Pay {formatAmount(amount)} via UPI
    </a>
  );
}

function ExpensePage({ snapshot }: { snapshot: Extract<Snapshot, { type: 'expense' }> }) {
  const { expense_description, total_amount, payers, shares, creator_name, creator_upi_id, currency } = snapshot;

  return (
    <>
      <div className="bg-[#2C2C2E] rounded-2xl p-5 border border-[#374151]">
        <h2 className="text-[22px] font-bold mb-1">{expense_description}</h2>
        <div className="text-center my-3 mb-5">
          <div className="text-4xl font-extrabold text-white">{formatAmount(total_amount)}</div>
          <div className="text-gray-400 text-[13px] mt-1">Total Amount</div>
        </div>

        <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4">Paid By</div>
        <div className="flex flex-col gap-4 mb-5">
          {payers.map((p, i) => (
            <div key={i} className="flex items-center gap-3 py-2">
              <Avatar name={p.name} />
              <div>
                <div className="text-[15px] font-semibold">{p.name}</div>
                <div className="text-[13px] font-semibold text-emerald-500">paid {formatAmount(p.amount)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4">Split Between</div>
        <div className="flex flex-col gap-4">
          {shares.map((s, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Avatar name={s.name} />
                <div>
                  <div className="text-[15px] font-semibold">{s.name}</div>
                  <div className="text-[13px] font-semibold text-[#F98C2F]">owes {formatAmount(s.amount)}</div>
                </div>
              </div>
              {creator_upi_id && Math.abs(s.amount) > 0 ? (
                <UpiButton
                  upiId={creator_upi_id}
                  payeeName={creator_name}
                  amount={Math.round(Math.abs(s.amount))}
                  currency={currency}
                  note={`Hisaab-${expense_description}`}
                />
              ) : !creator_upi_id && Math.abs(s.amount) > 0 ? (
                <span className="block text-gray-400 text-xs ml-12 italic">Ask {creator_name} for their UPI ID</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function GroupPage({ snapshot }: { snapshot: Extract<Snapshot, { type: 'group' }> }) {
  const { group_name, balances, expenses, creator_name, creator_upi_id, currency } = snapshot;

  return (
    <>
      <div className="bg-[#2C2C2E] rounded-2xl p-5 border border-[#374151]">
        <h2 className="text-[22px] font-bold mb-1">{group_name}</h2>
        <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4">Net Balances</div>
        <div className="flex flex-col gap-4">
          {balances.length === 0 ? (
            <div className="text-center text-gray-400 py-5">Everyone is settled up!</div>
          ) : (
            balances.map((b, i) => {
              const isPositive = b.amount >= 0;
              const label = isPositive ? 'gets back' : 'owes';
              const color = isPositive ? 'text-emerald-500' : 'text-[#F98C2F]';
              const absAmount = Math.round(Math.abs(b.amount));
              return (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Avatar name={b.name} />
                    <div>
                      <div className="text-[15px] font-semibold">{b.name}</div>
                      <div className={`text-[13px] font-semibold ${color}`}>{label} {formatAmount(b.amount)}</div>
                    </div>
                  </div>
                  {!isPositive && creator_upi_id && absAmount > 0 ? (
                    <UpiButton
                      upiId={creator_upi_id}
                      payeeName={creator_name}
                      amount={absAmount}
                      currency={currency}
                      note={`Hisaab-${group_name}`}
                    />
                  ) : !isPositive && !creator_upi_id && absAmount > 0 ? (
                    <span className="block text-gray-400 text-xs ml-12 italic">Ask {creator_name} for their UPI ID</span>
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </div>

      {expenses && expenses.length > 0 && (
        <div className="bg-[#2C2C2E] rounded-2xl p-5 border border-[#374151] mt-4">
          <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4">Recent Expenses</div>
          <div className="flex flex-col gap-3">
            {expenses.map((e, i) => (
              <div key={i} className="flex justify-between items-center py-2.5 border-b border-[#374151] last:border-b-0">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white truncate">{e.description}</div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    Paid by {e.paid_by}{e.date ? ` \u00B7 ${e.date}` : ''}
                  </div>
                </div>
                <div className="text-sm font-bold text-white ml-3 shrink-0">
                  {formatAmount(e.total_amount)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function ErrorCard({ title, message }: { title: string; message: string }) {
  return (
    <div className="bg-[#2C2C2E] rounded-2xl p-10 border border-[#374151] text-center">
      <div className="text-5xl mb-4">&#128533;</div>
      <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400">{message}</p>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="bg-[#2C2C2E] rounded-2xl p-5 border border-[#374151] animate-pulse">
      <div className="h-6 bg-[#374151] rounded w-1/2 mb-4" />
      <div className="h-10 bg-[#374151] rounded w-1/3 mx-auto mb-6" />
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#374151]" />
            <div className="flex-1">
              <div className="h-4 bg-[#374151] rounded w-24 mb-1" />
              <div className="h-3 bg-[#374151] rounded w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ERROR_TITLES: Record<string, string> = {
  not_found: 'Link not found',
  revoked: 'Link revoked',
  expired: 'Link expired',
  view_limit: 'View limit reached',
  missing_token: 'Invalid link',
};

function ShareContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('t');

  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const [error, setError] = useState<{ title: string; message: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setError({ title: 'Invalid link', message: 'This link is missing a token.' });
      setLoading(false);
      return;
    }

    fetch(`${API_URL}?t=${encodeURIComponent(token)}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          const code = data.error || 'not_found';
          setError({
            title: ERROR_TITLES[code] || 'Something went wrong',
            message: data.message || 'Please try again later.',
          });
        } else {
          setSnapshot(data.snapshot);
        }
      })
      .catch(() => {
        setError({ title: 'Network error', message: 'Could not load this page. Check your connection and try again.' });
      })
      .finally(() => setLoading(false));
  }, [token]);

  const creatorName = snapshot
    ? snapshot.type === 'expense'
      ? snapshot.creator_name
      : snapshot.creator_name
    : null;

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-sans">
      <div className="max-w-[480px] mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-[28px] font-extrabold text-[#F98C2F] tracking-tight">Hisaab</div>
          {creatorName && (
            <div className="text-gray-400 text-sm mt-1">Shared by {creatorName}</div>
          )}
        </div>

        {/* Content */}
        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <ErrorCard title={error.title} message={error.message} />
        ) : snapshot?.type === 'expense' ? (
          <ExpensePage snapshot={snapshot} />
        ) : snapshot?.type === 'group' ? (
          <GroupPage snapshot={snapshot} />
        ) : null}

        {/* Expiry notice */}
        {snapshot && !error && (
          <div className="text-center text-gray-500 text-xs mt-4">
            This link expires in 72 hours from when it was created.
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-[#374151]">
          <p className="text-gray-400 text-sm mb-3">
            Split expenses effortlessly with <strong>Hisaab</strong>
          </p>
          <Link
            href="/"
            className="inline-block bg-[#F98C2F] text-black py-3 px-8 rounded-full font-bold text-[15px] no-underline"
          >
            Download Hisaab
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SharePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#1A1A1A] text-white font-sans">
        <div className="max-w-[480px] mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <div className="text-[28px] font-extrabold text-[#F98C2F] tracking-tight">Hisaab</div>
          </div>
          <LoadingSkeleton />
        </div>
      </div>
    }>
      <ShareContent />
    </Suspense>
  );
}
