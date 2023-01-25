import React from 'react';
import { Text, View } from 'react-native';
import { Button, useTheme } from 'etta-ui';
import { getModalStyles } from './modal.style';

export interface ModalButtonProps {
  title: string;
  onPress: () => void;
  testID?: string;
}

export interface ModalProps {
  title: string;
  message: string;
  actionButton?: ModalButtonProps;
  cancelButton?: ModalButtonProps;
}

function ModalComponent(props: ModalProps) {
  let { actionButton, cancelButton, message, title } = props;
  const theme = useTheme();
  const styles = getModalStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.btnContainer}>
        {cancelButton ? (
          <Button
            testID={cancelButton.testID}
            size={Button.sizes.default}
            appearance={Button.appearances.outline}
            style={styles.button}
            title={cancelButton.title}
            onPress={cancelButton.onPress}
          />
        ) : null}
        {actionButton ? (
          <Button
            testID={actionButton.testID}
            size={Button.sizes.default}
            style={styles.button}
            title={actionButton.title}
            onPress={actionButton.onPress}
          />
        ) : null}
      </View>
    </View>
  );
}

export const Modal = React.memo(ModalComponent);
