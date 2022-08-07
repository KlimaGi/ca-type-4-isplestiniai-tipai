/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

console.log('enums');
{
  enum LoadingState {
    beforeLoad = 'beforeLoad',
    loading = 'loading',
    loaded = 'loaded',
  }

  const englishLoadingStates = {
    [LoadingState.beforeLoad]: 'Before Load',
  };

  const IsLoading = (state: LoadingState) => state === LoadingState.loading;

  console.log('', IsLoading(LoadingState.beforeLoad));
}
