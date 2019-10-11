### Instalação

Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
react-native init nomedoprojeto --template rnbasico
```

#### Passo Adicional no Android

Para que os gestos sejam habilitados no Android é necessário um passo a mais, que é bem simples, abra o arquivo `android/app/src/main/java/<pacote_do_projeto>/MainActivity.java`, e comece importando os pacotes como abaixo:

```java
// ...
import com.facebook.react.ReactActivity;
// Importações adicionadas
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Feito a importação vamos criar um método novo, logo abaixo do `getMainComponentName()`, ficando:

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
  // Método adicionado
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

Depois disso é interessante rodar novamente o build pro android para evitar problemas:

```sh
react-native run-android
```


#### Passo Adicional no iOS


No iOS teoricamente não é preciso fazer nada, porém para evitar possíveis problemas, fazemos o seguinte:

(Supondo que você esteja na pasta raiz do projeto)

```sh
cd ios && pod install
```
Em seguida:

```sh
cd .. && react-native run-ios
```

---
# meetappmobile
