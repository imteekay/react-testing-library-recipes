import { renderHook } from '@testing-library/react-hooks';
import { useFetchAPI } from '../useFetchAPI';

describe('useFetchAPI', () => {
  const url = '/api/learning-paths';
  const initialData = {};

  it('gets and updates data from the api request', async () => {
    const pokemon = { name: 'charmander', types: [{ type: { name: 'fire' } }] };
    fetch.once(JSON.stringify(pokemon));

    const { result, waitForNextUpdate } = renderHook(() => useFetchAPI(url, initialData));

    await waitForNextUpdate();

    const { hasError, isLoading, isResolved, data } = result.current;

    expect(isLoading).toEqual(false);
    expect(hasError).toEqual(false);
    expect(isResolved).toEqual(true);
    expect(data).toEqual(pokemon);
  });

  it('handles error on failed network api request', async () => {
    fetch.mockReject(() => Promise.reject('API is down!'));

    const { result, waitForNextUpdate } = renderHook(() => useFetchAPI(url, initialData));

    await waitForNextUpdate();

    const { hasError, isLoading, isResolved, data } = result.current;

    expect(isLoading).toEqual(false);
    expect(hasError).toEqual(true);
    expect(isResolved).toEqual(false);
    expect(data).toEqual({});
  });
});
